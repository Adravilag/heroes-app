import { AuthProvider } from "./auth";
import { LanguageProvider } from "./i18n/i18n";
import AppRouter from "./router/AppRouter";

const HeroesApp = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default HeroesApp;
