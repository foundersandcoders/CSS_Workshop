import { useState } from 'react';
import './Navigation.css';

interface NavItem {
  label: string;
  href?: string;
  icon?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: '🏠',
  },
  {
    label: 'Search',
    href: '/search',
    icon: '🔍',
  },
  {
    label: 'Create',
    href: '/create',
    icon: '➕',
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: '👤',
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: '💬',
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <nav>
        <button className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${isOpen ? 'closed' : 'open'}`}>OPEN ME</span>
          <span className={`${isOpen ? 'open' : 'closed'}`}>CLOSE ME</span>
        </button>

        <div className="spacer"></div>

        <ul className={`${isOpen ? 'open' : 'closed'}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href || '#'}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
