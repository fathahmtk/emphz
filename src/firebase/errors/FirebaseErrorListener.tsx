'use client';

import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { errorEmitter } from './error-emitter';

const FirebaseErrorListener = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handlePermissionError = (error: Error) => {
      setError(error);
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);

  if (error) {
    // When an error is set, we want to throw it to be caught by an Error Boundary.
    // We can't just throw it inside the useEffect, as that won't be caught.
    // So we throw it during the render phase.
    throw error;
  }

  return null; // This component does not render anything
};

export default FirebaseErrorListener;
