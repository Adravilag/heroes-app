import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/hooks';
import { useLanguage, LanguageSelector } from '../../i18n/i18n';

const Navbar = () => {

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
    <nav className="hots-navbar">
      <div className="hots-container">
        <Link className="hots-brand" to="/">
          {t('heroes.title')}
        </Link>

        <ul className="hots-nav-links">
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to="/warcraft"
            >
              {t('navigation.warcraft')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to="/starcraft"
            >
              {t('navigation.starcraft')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to="/diablo"
            >
              {t('navigation.diablo')}
            </NavLink>
          </li>
          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to="/overwatch"
            >
              {t('navigation.overwatch')}
            </NavLink>
          </li>

          <li className="hots-nav-item">
            <NavLink
              className={({ isActive }) =>
                `hots-nav-link ${isActive ? "active" : ""}`
              }
              to="/search"
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
