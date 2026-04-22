export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="text-center">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-sky-400 border-r-transparent align-[-0.125em]"
          role="status"
          aria-label="Loading"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <p className="mt-4 text-lg text-secondary">Loading Portfolio...</p>
      </div>
    </div>
  );
}
