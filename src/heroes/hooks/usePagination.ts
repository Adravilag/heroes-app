import { useState, useCallback, useMemo } from 'react';

interface UsePaginationOptions {
  initialPage?: number;
  pageSize?: number;
  totalItems: number;
}

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startIndex: number;
  endIndex: number;
}

interface PaginationActions {
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  setPageSize: (size: number) => void;
}

export const usePagination = ({
  initialPage = 1,
  pageSize: initialPageSize = 10,
  totalItems,
}: UsePaginationOptions): PaginationState & PaginationActions => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const paginationState = useMemo(() => {
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    
    return {
      currentPage,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
      startIndex,
      endIndex,
    };
  }, [currentPage, pageSize, totalItems]);

  const goToPage = useCallback((page: number) => {
    const maxPage = Math.ceil(totalItems / pageSize);
    const validPage = Math.max(1, Math.min(page, maxPage));
    setCurrentPage(validPage);
  }, [totalItems, pageSize]);

  const nextPage = useCallback(() => {
    if (paginationState.hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  }, [paginationState.hasNextPage]);

  const previousPage = useCallback(() => {
    if (paginationState.hasPreviousPage) {
      setCurrentPage(prev => prev - 1);
    }
  }, [paginationState.hasPreviousPage]);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    const maxPage = Math.ceil(totalItems / pageSize);
    setCurrentPage(maxPage);
  }, [totalItems, pageSize]);

  const handleSetPageSize = useCallback((size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when page size changes
  }, []);

  return {
    ...paginationState,
    goToPage,
    nextPage,
    previousPage,
    goToFirstPage,
    goToLastPage,
    setPageSize: handleSetPageSize,
  };
};
