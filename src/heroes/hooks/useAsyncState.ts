import { useState, useCallback } from 'react';

interface UseAsyncStateOptions<T> {
  initialData?: T;
  initialLoading?: boolean;
  initialError?: Error | null;
}

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface AsyncStateActions<T> {
  setData: (data: T | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
  reset: () => void;
  execute: (asyncFunction: () => Promise<T>) => Promise<T | null>;
}

export const useAsyncState = <T>(
  options: UseAsyncStateOptions<T> = {}
): AsyncState<T> & AsyncStateActions<T> => {
  const { initialData = null, initialLoading = false, initialError = null } = options;

  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<Error | null>(initialError);

  const reset = useCallback(() => {
    setData(initialData);
    setLoading(initialLoading);
    setError(initialError);
  }, [initialData, initialLoading, initialError]);

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await asyncFunction();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error('Unknown error occurred');
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    setError,
    reset,
    execute,
  };
};
