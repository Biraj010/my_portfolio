# Contact Backend API

Node.js/Express backend service for portfolio contact form with SMTP email functionality.

## Features

- RESTful API endpoint for contact form submissions
- SMTP email service using Nodemailer
- Input validation with express-validator
- CORS configuration for frontend integration
- Environment-based configuration
- Professional HTML email templates

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account (or other SMTP service)

## Installation

1. Navigate to the backend directory:
```bash
cd contact_backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file by copying `.env.example`:
```bash
copy .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=5000

# SMTP Configuration (for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=regmibiraj.dev@gmail.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

## Gmail Setup (App Password)

To use Gmail SMTP, you need to generate an App Password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification (if not already enabled)
4. Go to "App passwords" section
5. Select "Mail" and "Windows Computer" (or Other)
6. Generate the password
7. Copy the 16-character password (without spaces) to `SMTP_PASS` in `.env`

**Note:** Never use your regular Gmail password. Always use App Passwords.

## Usage

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Send a contact form submission.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+977 9846892218",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error message",
  "errors": [...]
}
```

## Email Template

The service sends a professionally formatted HTML email with:
- Sender's name, email, and phone
- Message content
- Styled with your portfolio branding (#915EFF color)
- Responsive design

## Project Structure

```
contact_backend/
├── routes/
│   └── contact.js         # Contact route handler
├── services/
│   └── emailService.js    # Nodemailer SMTP service
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── server.js             # Express server setup
└── README.md             # This file
```

## Testing

You can test the API using:

1. **Postman/Thunder Client:**
   - POST to `http://localhost:5000/api/contact`
   - Set Content-Type: application/json
   - Add JSON body with name, email, phone, message

2. **cURL:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+977 1234567890\",\"message\":\"Test message\"}"
```

## Security Notes

- Never commit `.env` file to version control
- Use App Passwords instead of regular passwords
- Configure CORS to allow only your frontend domain in production
- Implement rate limiting in production
- Consider adding reCAPTCHA for spam prevention

## Troubleshooting

### Email not sending
- Verify SMTP credentials are correct
- Check if 2-Step Verification is enabled for Gmail
- Ensure you're using App Password, not regular password
- Check firewall/antivirus settings

### CORS errors
- Verify `FRONTEND_URL` matches your frontend's URL
- Check if frontend is running on the specified port

### Port already in use
- Change `PORT` in `.env` file
- Or kill the process using the port

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Update `FRONTEND_URL` to your production frontend URL
3. Consider using:
   - PM2 for process management
   - Nginx as reverse proxy
   - SSL certificate (Let's Encrypt)
4. Add rate limiting middleware
5. Set up monitoring and logging

## License

ISC

## Author

Biraj Regmi - regmibiraj.dev@gmail.com
