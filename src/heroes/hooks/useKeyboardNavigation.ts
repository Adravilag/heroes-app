import { useEffect, useCallback, useState } from 'react';

interface UseKeyboardNavigationOptions {
  enabled?: boolean;
  itemsCount: number;
  onSelect?: (index: number) => void;
  onEscape?: () => void;
  loop?: boolean;
}

export const useKeyboardNavigation = ({
  enabled = true,
  itemsCount,
  onSelect,
  onEscape,
  loop = true,
}: UseKeyboardNavigationOptions) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled || itemsCount === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => {
          if (loop) {
            return prev >= itemsCount - 1 ? 0 : prev + 1;
          }
          return Math.min(prev + 1, itemsCount - 1);
        });
        break;

      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => {
          if (loop) {
            return prev <= 0 ? itemsCount - 1 : prev - 1;
          }
          return Math.max(prev - 1, 0);
        });
        break;

      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < itemsCount && onSelect) {
          onSelect(selectedIndex);
        }
        break;

      case 'Escape':
        event.preventDefault();
        setSelectedIndex(-1);
        if (onEscape) {
          onEscape();
        }
        break;

      default:
        break;
    }
  }, [enabled, itemsCount, selectedIndex, onSelect, onEscape, loop]);

  useEffect(() => {
    if (enabled) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enabled, handleKeyDown]);

  // Reset selected index when items count changes
  useEffect(() => {
    if (selectedIndex >= itemsCount) {
      setSelectedIndex(-1);
    }
  }, [itemsCount, selectedIndex]);

  const resetSelection = useCallback(() => {
    setSelectedIndex(-1);
  }, []);

  return {
    selectedIndex,
    setSelectedIndex,
    resetSelection,
  };
};
