import { ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
  imageUrl?: string;
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const CardContent = ({
  children,
  imageUrl,
  onMouseEnter,
  onMouseLeave,
}: CardProps) => {
  return (
    <Content
      $imageUrl={imageUrl}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Content>
  );
};

const Content = styled.div<{ $imageUrl?: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.base};
  transition: transform ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut},
              box-shadow ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  & > div:first-child {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-position: center;
  }
`;