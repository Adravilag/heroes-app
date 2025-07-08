import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import HeroList from "../components/heroes/HeroList";

const DiabloPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();
  
  return (
    <>
      <HeroList universe="Diablo" />
    </>
  );
};

export default DiabloPage;
