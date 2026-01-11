'use client';

import { useEffect } from 'react';
import { errorEmitter } from './error-emitter';
import { useErrorHandler } from 'react-error-boundary';

const FirebaseErrorListener = () => {
  const handleError = useErrorHandler();

  useEffect(() => {
    const handlePermissionError = (error: Error) => {
      console.log('Permission error detected, handling with boundary');
      handleError(error);
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [handleError]);

  return null; // This component does not render anything
};

export default FirebaseErrorListener;
