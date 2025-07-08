import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import HeroList from "../components/heroes/HeroList";

const StarcraftPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();
  
  return (
    <>
      <HeroList universe="Starcraft" />
    </>
  );
};

export default StarcraftPage;
