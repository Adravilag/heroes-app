import { useNavigate, useLocation } from "react-router-dom";
import { AnimatedGradientText } from "../../ui/components";
import { LanguageSelector, useLanguage } from "../../i18n/i18n";
import "./LoginPage.css";
import { useAuth } from "../hooks";

const LoginPage = () => {
  const { login } = useAuth();
  const { t } = useLanguage();

  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: "1",
      username: "@Adravilag",
    });

    const lastVisitedPath = localStorage.getItem("lastVisitedPath") || "/";
    // Si hay una ruta guardada, redirigir a esa ruta

    console.log(`Redirigiendo a la última ruta visitada: ${lastVisitedPath}`);
    

    navigate(lastVisitedPath, {
      replace: true,
    });
    return;
  };

  return (
    <div className="login-container">
      <div className="language-selector-container">
        <LanguageSelector />
      </div>
      <div className="login-card">
        <div className="login-content">
          <div className="login-hero-icon">
            <div className="nexus-orb">
              <div className="orb-core"></div>
              <div className="orb-ring"></div>
              <div className="orb-glow"></div>
            </div>
          </div>

          <div className="login-title">
            <AnimatedGradientText>{t("auth.login.title")}</AnimatedGradientText>
          </div>

          <div className="login-subtitle">
            <p>{t("auth.login.welcome")}</p>
            <p className="subtitle-small">{t("auth.login.subtitle")}</p>
          </div>

          <div className="login-form">
            <button className="login-button" onClick={handleLogin}>
              <span className="button-text">{t("auth.login.loginButton")}</span>
              <div className="button-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
