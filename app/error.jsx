"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Error logged in development only
    if (process.env.NODE_ENV === 'development') {
      console.error("Error:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-white text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-secondary mb-6">
          {error?.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#915EFF] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#804dee] transition-all"
          suppressHydrationWarning
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
