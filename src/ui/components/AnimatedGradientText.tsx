import type { FC, ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedGradientText: FC<AnimatedGradientTextProps> = ({ children, className }) => {
  return (
    <span 
      className={`animated-gradient-text ${className || ''}`}>
      {children}
    </span>
  );
};

export default AnimatedGradientText;
