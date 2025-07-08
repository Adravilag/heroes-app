import type { Hero } from "../../types/Hero";
import { useLanguage } from "../../../i18n/i18n";

const HeroModal = ({
  selectedHero,
  onClose,
  onViewDetails,
}: {
  selectedHero: Hero | null;
  onClose: () => void;
  onViewDetails: (hero: Hero) => void;
}) => {
  const { t } = useLanguage();
  return (
    <div>
      {/* Modal con Bootstrap */}
      {selectedHero && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div
              className="modal-content"
              style={{ backgroundColor: "var(--hots-dark)", border: "none" }}
            >
              <div
                className="modal-header border-bottom"
                style={{ borderColor: "rgba(110, 116, 124, 0.2) !important" }}
              >
                <h5 className="modal-title text-white fw-light">
                  {selectedHero.name}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => onClose()}
                ></button>
              </div>

              <div className="modal-body">
                <div className="row">
                  {/* Imagen */}
                  <div className="col-md-4">
                    <img
                      src={selectedHero.image}
                      alt={selectedHero.name}
                      className="img-fluid rounded"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/placeholder-hero.jpg";
                      }}
                    />
                  </div>

                  {/* Información */}
                  <div className="col-md-8">
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "var(--hots-cyan)",
                            color: "var(--hots-dark)",
                          }}
                        >
                          {selectedHero.role}
                        </span>
                        <span
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "var(--hots-blue)",
                            color: "white",
                          }}
                        >
                          {selectedHero.universe}
                        </span>
                        <span
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "var(--hots-purple)",
                            color: "white",
                          }}
                        >
                          {selectedHero.difficulty}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted small lh-base">
                      {selectedHero.description}
                    </p>

                    {/* Stats */}
                    <div className="row g-2 mt-3">
                      <div className="col-4">
                        <div className="text-center p-2 rounded">
                          <div
                            className="small fw-bold"
                            style={{ color: "var(--hots-orange)" }}
                          >
                            {selectedHero.damageType}
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {t('tooltips.damageType')}
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center p-2 rounded">
                          <div
                            className="small fw-bold"
                            style={{ color: "var(--hots-red)" }}
                          >
                            {selectedHero.healthType}
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {t('tooltips.health')}
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center p-2 rounded">
                          <div
                            className="small fw-bold"
                            style={{ color: "var(--hots-cyan)" }}
                          >
                            {selectedHero.mobility}
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {t('tooltips.mobility')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal-footer border-top"
                style={{ borderColor: "rgba(110, 116, 124, 0.2) !important" }}
              >
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => onClose()}
                >
                  {t('common.close')}
                </button>
                <button
                  type="button"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "var(--hots-cyan)",
                    color: "var(--hots-dark)",
                  }}
                  onClick={() => {
                    onViewDetails(selectedHero);
                  }}
                >
                  {t('heroes.viewDetails')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroModal;
