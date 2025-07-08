import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import HeroList from "../components/heroes/HeroList";

const OverwatchPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();
  
  return (
    <>
      <HeroList universe="Overwatch" />
    </>
  );
};

export default OverwatchPage;
