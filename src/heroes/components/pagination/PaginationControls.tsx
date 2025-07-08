import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../../i18n/i18n';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'hots' | 'simple' | 'compact';
  autoScroll?: boolean;
  scrollTarget?: 'top' | 'container';
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPreviousPage,
  onFirstPage,
  onLastPage,
  showLabels = true,
  size = 'md',
  variant = 'hots',
  autoScroll = true,
  scrollTarget = 'top'
}) => {
  const { t } = useLanguage();
  const prevPageRef = useRef(currentPage);

  // Efecto para scroll automático cuando cambia la página
  useEffect(() => {
    if (autoScroll && prevPageRef.current !== currentPage) {
      console.log('Page changed from', prevPageRef.current, 'to', currentPage);
      
      // Pequeño delay para asegurar que el DOM se actualice
      const timeoutId = setTimeout(() => {
        try {
          if (scrollTarget === 'top') {
            console.log('Scrolling to top');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (scrollTarget === 'container') {
            const container = document.querySelector('.heroes-container');
            if (container) {
              console.log('Scrolling to container');
              container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        } catch (error) {
          console.error('Error during scroll:', error);
        }
      }, 100);
      
      // Actualizar la referencia
      prevPageRef.current = currentPage;
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentPage, autoScroll, scrollTarget]);

  // Estilos base según el tamaño
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '0.25rem 0.5rem', fontSize: '0.875rem' };
      case 'lg':
        return { padding: '0.75rem 1.5rem', fontSize: '1.125rem' };
      default:
        return { padding: '0.5rem 1rem', fontSize: '1rem' };
    }
  };

  const baseButtonStyle = {
    ...getSizeStyles(),
    backgroundColor: 'var(--hots-dark)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    color: 'white',
    margin: '0 0.25rem',
    transition: 'all 0.3s ease',
  };

  const disabledButtonStyle = {
    ...baseButtonStyle,
    opacity: 0.5,
    cursor: 'not-allowed',
  };

  if (variant === 'hots') {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="pagination-info me-3">
          <small className="text-muted">
            {t('pagination.page')} {currentPage} {t('pagination.of')} {totalPages}
          </small>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-outline-warning"
            style={hasPreviousPage ? baseButtonStyle : disabledButtonStyle}
            onClick={onFirstPage}
            disabled={!hasPreviousPage}
            title={t('tooltips.firstPage')}
          >
            {showLabels ? t('pagination.first') : '<<'}
          </button>
          <button
            className="btn btn-outline-warning"
            style={hasPreviousPage ? baseButtonStyle : disabledButtonStyle}
            onClick={onPreviousPage}
            disabled={!hasPreviousPage}
            title={t('tooltips.previousPage')}
          >
            {showLabels ? t('pagination.previous') : '<'}
          </button>
          <button
            className="btn btn-outline-warning"
            style={hasNextPage ? baseButtonStyle : disabledButtonStyle}
            onClick={onNextPage}
            disabled={!hasNextPage}
            title={t('tooltips.nextPage')}
          >
            {showLabels ? t('pagination.next') : '>'}
          </button>
          <button
            className="btn btn-outline-warning"
            style={hasNextPage ? baseButtonStyle : disabledButtonStyle}
            onClick={onLastPage}
            disabled={!hasNextPage}
            title={t('tooltips.lastPage')}
          >
            {showLabels ? t('pagination.last') : '>>'}
          </button>
        </div>
      </div>
    );
  }

  // Variante simple o compacta
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <button
        className="btn btn-outline-secondary"
        onClick={onPreviousPage}
        disabled={!hasPreviousPage}
        title={t('tooltips.previousPage')}
      >
        {t('pagination.previous')}
      </button>
      <span className="mx-3 text-muted">
        {t('pagination.page')} {currentPage} {t('pagination.of')} {totalPages}
      </span>
      <button
        className="btn btn-outline-secondary"
        onClick={onNextPage}
        disabled={!hasNextPage}
        title={t('tooltips.nextPage')}
      >
        {t('pagination.next')}
      </button>
    </div>
  );
};

export default PaginationControls;
