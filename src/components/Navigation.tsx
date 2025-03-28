import { useState } from 'react';
import styled from 'styled-components';

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
    <NavBar>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span>{isOpen ? "CLOSE ME" : "OPEN ME"}</span>
      </MenuButton>

      <Spacer />

      {isOpen && (
        <NavList>
          {navItems.map((item) => (
            <NavLink key={item.label}>
              <a href={item.href || '#'}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </NavLink>
          ))}
        </NavList>
      )}
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const MenuButton = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20%;
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrast};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const NavList = styled.ul`
  flex-grow: 2;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavLink = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.timing.easeInOut};

  a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.neutral[700]};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    
    a {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;