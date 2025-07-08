import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import HeroList from "../components/heroes/HeroList";

const WarcraftPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();
  
  return (
    <>
      <HeroList universe="Warcraft" />
    </>
  );
};

export default WarcraftPage;
