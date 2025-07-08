import { useEffect, useState } from 'react';

interface UseDebounceOptions {
  delay?: number;
}

export const useDebounce = <T>(
  value: T,
  options: UseDebounceOptions = {}
): T => {
  const { delay = 300 } = options;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Hook alternativo para debounce con callback
export const useDebouncedCallback = <T extends (...args: string[]) => void>(
  callback: T,
  delay: number = 300
): T => {
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

  const debouncedCallback = ((...args: Parameters<T>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(newTimer);
  }) as T;

  return debouncedCallback;
};
