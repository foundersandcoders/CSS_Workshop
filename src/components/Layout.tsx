import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header>
        <h1>PinClone</h1>
        <Navigation />
      </header>
      <main>
        <div className="main-content">
          {children}
        </div>
      </main>
    </div>
  );
};
