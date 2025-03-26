interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar = ({ src, alt, size = 'md', className = '' }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar ${size} ${className}`}
      loading="lazy"
    />
  );
}; 