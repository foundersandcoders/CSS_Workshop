import { ReactNode } from 'react';

type IconSize = 'sm' | 'md' | 'lg';

interface IconProps {
  children: ReactNode;
  size?: IconSize;
  className?: string;
}

export const Icon = ({ children, size = 'md', className = '' }: IconProps) => {
  return <span className={`icon ${size} ${className}`}>{children}</span>;
}; 