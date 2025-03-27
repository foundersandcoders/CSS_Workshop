import { ReactNode, MouseEvent } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Card = ({
  children,
  className = '',
  onMouseEnter,
  onMouseLeave,
}: CardProps) => {
  return (
    <div
      className={`card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}; 