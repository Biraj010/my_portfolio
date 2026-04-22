"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-6">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Something went wrong
        </h2>
        <p className="mb-6 text-secondary">
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_45px_-8px_rgba(37,99,235,0.9)]"
          suppressHydrationWarning
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
