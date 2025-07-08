import { useEffect, useState } from 'react';
import './css/ParticleSystem.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'spark' | 'glow' | 'magic';
}

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => {
      const colors = ['#fbbf24', '#3b82f6', '#8b5cf6', '#06b6d4', '#f97316'];
      const types: ('spark' | 'glow' | 'magic')[] = ['spark', 'glow', 'magic'];
      
      return {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 100,
        maxLife: 100,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)]
      };
    };

    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 1,
          vx: particle.vx * 0.99,
          vy: particle.vy * 0.99
        })).filter(particle => particle.life > 0);

        // Añadir nuevas partículas ocasionalmente
        if (Math.random() < 0.1 && updated.length < 50) {
          updated.push(createParticle());
        }

        return updated;
      });
    };

    // Crear partículas iniciales
    const initialParticles = Array.from({ length: 20 }, createParticle);
    setParticles(initialParticles);

    const interval = setInterval(updateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particle-system">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
