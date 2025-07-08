import './css/AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Ondas de energía */}
      <div className="energy-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      {/* Círculos mágicos */}
      <div className="magic-circles">
        <div className="magic-circle circle-1"></div>
        <div className="magic-circle circle-2"></div>
        <div className="magic-circle circle-3"></div>
      </div>
      
      {/* Rayos de luz */}
      <div className="light-rays">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
        <div className="ray ray-4"></div>
      </div>
      
      {/* Nebulosa de fondo */}
      <div className="nebula">
        <div className="nebula-layer layer-1"></div>
        <div className="nebula-layer layer-2"></div>
        <div className="nebula-layer layer-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
