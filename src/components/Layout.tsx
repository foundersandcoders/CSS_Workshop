import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <div>
          <h1>PinClone</h1>
          <Navigation />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
