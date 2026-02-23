import { NextResponse } from 'next/server';

export const maxDuration = 60; // Allow up to 60 seconds for cold starts

export async function POST(request) {
  try {
    const body = await request.json();
    
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    
    // Increased timeout for Render cold starts (free tier can take 30-50 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 55000); // 55 second timeout
    
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Backend returned non-JSON response:', response.status, contentType);
        const text = await response.text();
        console.error('Response body:', text.substring(0, 200));
        
        return NextResponse.json(
          { 
            success: false, 
            message: 'Backend service is unavailable. Please try again in a moment.' 
          },
          { status: 503 }
        );
      }

      const data = await response.json();

      if (!response.ok) {
        return NextResponse.json(
          { success: false, message: data.message || 'Failed to send message' },
          { status: response.status }
        );
      }

      return NextResponse.json(data, { status: 200 });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.error('Request timeout - backend may be waking up from sleep');
        return NextResponse.json(
          { 
            success: false, 
            message: 'Request timed out. The service may be starting up. Please try again.' 
          },
          { status: 504 }
        );
      }
      
      throw fetchError;
    }
  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('API route error:', error);
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.',
        hint: 'If this persists, the backend service may be starting up (this can take 30-60 seconds on first request).'
      },
      { status: 500 }
    );
  }
}
