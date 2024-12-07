import { useEffect } from 'react';

export function ErrorPage({
  error,
  reset,
}: {
  error: unknown;
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Type guard to check if `error` is actually an instance of Error
  const errorMessage =
    error instanceof Error ? error.message : 'An unknown error occurred.';

  return (
    <div>
      <h2>An unhandled error occurred!</h2>
      <blockquote>
        <code>
          {errorMessage}
        </code>
      </blockquote>
      {reset && <button onClick={() => reset()}>Try again</button>}
    </div>
  );
}
