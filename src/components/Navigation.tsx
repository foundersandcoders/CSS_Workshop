import { useState } from 'react';

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
    <nav>
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href || '#'}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
