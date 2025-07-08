import './css/Footer.css';
import { useLanguage } from '../../i18n/i18n';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hots-footer">
      <div className="hots-footer-background"></div>
      <div className="hots-footer-content">
        <div className="hots-footer-container">
          
          {/* Sección Principal */}
          <div className="hots-footer-main">
            <div className="hots-footer-brand">
              <div className="footer-logo">
                <div className="nexus-symbol">⚡</div>
                <span className="brand-text">{t('footer.brand')}</span>
              </div>
              <p className="footer-description">
                {t('footer.description')}
              </p>
            </div>

            {/* Links de Navegación */}
            <div className="hots-footer-nav">
              <div className="footer-column">
                <h4>{t('footer.universes')}</h4>
                <ul>
                  <li><a href="/warcraft">{t('navigation.warcraft')}</a></li>
                  <li><a href="/starcraft">{t('navigation.starcraft')}</a></li>
                  <li><a href="/diablo">{t('navigation.diablo')}</a></li>
                  <li><a href="/overwatch">{t('navigation.overwatch')}</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>{t('footer.community')}</h4>
                <ul>
                  <li><a href="/search">{t('footer.searchHeroes')}</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Reddit</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Twitch</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>{t('footer.resources')}</h4>
                <ul>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">{t('footer.guides')}</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">{t('footer.builds')}</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">{t('footer.tierLists')}</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">{t('footer.patches')}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="hots-footer-social">
            <div className="social-title">
              <h4>{t('footer.followUs')}</h4>
            </div>
            <div className="social-links">
              <a href="#" className="social-link facebook" title="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link twitter" title="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link youtube" title="YouTube">
                <span className="social-icon">📺</span>
              </a>
              <a href="#" className="social-link twitch" title="Twitch">
                <span className="social-icon">🎮</span>
              </a>
            </div>
          </div>

          {/* Separador */}
          <div className="hots-footer-divider"></div>

          {/* Copyright */}
          <div className="hots-footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} {t('footer.brand')}. {t('footer.copyright')}</p>
              <p className="footer-disclaimer">
                {t('footer.disclaimer')}
              </p>
            </div>
            
            <div className="footer-legal">
              <a href="#" className="legal-link">{t('footer.terms')}</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">{t('footer.privacy')}</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">{t('footer.cookies')}</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
