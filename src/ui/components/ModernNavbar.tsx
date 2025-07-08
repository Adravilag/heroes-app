import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/hooks';
import { useLanguage, ModernLanguageSelector } from '../../i18n/i18n';
import './css/ModernNavbar.css';

const ModernNavbar = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
    logout();
  }

  return (
    <nav className="modern-navbar">
      <div className="modern-navbar-container">
        {/* Logo/Brand */}
        <div className="modern-navbar-brand">
          <Link to="/" className="brand-logo">
            <div className="blizzard-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
              </svg>
            </div>
            <span className="brand-text">
                {t('heroes.title')}
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="modern-navbar-menu">
          <NavLink
            to="/warcraft"
            className={({ isActive }) => `modern-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-text">{t('navigation.warcraft')}</span>
            <div className="nav-indicator"></div>
          </NavLink>

          <NavLink
            to="/diablo"
            className={({ isActive }) => `modern-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-text">{t('navigation.diablo')}</span>
            <div className="nav-indicator"></div>
          </NavLink>

          <NavLink
            to="/overwatch"
            className={({ isActive }) => `modern-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-text">{t('navigation.overwatch')}</span>
            <div className="nav-indicator"></div>
          </NavLink>

          <NavLink
            to="/starcraft"
            className={({ isActive }) => `modern-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-text">{t('navigation.starcraft')}</span>
            <div className="nav-indicator"></div>
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) => `modern-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-text">{t('navigation.search')}</span>
            <div className="nav-indicator"></div>
          </NavLink>
        </div>

        {/* Right section with user info */}
        <div className="modern-navbar-actions">
          <div className="navbar-language">
            <ModernLanguageSelector />
          </div>

          <div className="navbar-user">
            <div className="user-profile">
              <div className="user-avatar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM6 14a6 6 0 0112 0v2H6v-2z"/>
                </svg>
              </div>
              <div className="user-info">
                <span className="user-name">{user?.name || "Usuario"}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 8L2 4h8l-4 4z"/>
                </svg>
              </div>
            </div>
            <div className="user-dropdown">
              <button onClick={handleLogout} className="dropdown-item logout-btn">
                {t('auth.logout')}
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
