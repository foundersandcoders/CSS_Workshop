import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Structure>
      <Header>
        <TitleBar>
          <h1>Swinder</h1>
          
          <pre>The wholesome pig-based friendship app</pre>
        </TitleBar>

        <Navigation />
      </Header>
      
      <Main>{children}</Main>
    </Structure>
  );
};

const Structure = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing[4]};

  & h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  & pre {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.default};
`;