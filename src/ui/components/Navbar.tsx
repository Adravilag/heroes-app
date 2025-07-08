import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/hooks';
import { useLanguage, LanguageSelector } from '../../i18n/i18n';
import { buildRoutePath } from '../../utils/pathUtils';

const Navbar = () => {

  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(buildRoutePath("/login"), {
      replace: true,
    });
    logout();
  }

  return (
    <nav className="hots-navbar">
      <div className="hots-container">
        <Link className="hots-brand" to={buildRoutePath("/")}>
          {t('heroes.title')}
        </Link>

        <ul className="hots-nav-links">
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to={buildRoutePath("/warcraft")}
            >
              {t('navigation.warcraft')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to={buildRoutePath("/starcraft")}
            >
              {t('navigation.starcraft')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to={buildRoutePath("/diablo")}
            >
              {t('navigation.diablo')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to={buildRoutePath("/overwatch")}
            >
              {t('navigation.overwatch')}
            </NavLink>
          </li>

          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to={buildRoutePath("/search")}
            >
              {t('navigation.search')}
            </NavLink>
          </li>
        </ul>

        <div className="hots-user-section">
          <span className="hots-user-name">
            {user?.name || user?.username || ""}
          </span>
          <LanguageSelector />
          <button className="hots-logout-btn" onClick={handleLogout}>
            {t('auth.logout')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
