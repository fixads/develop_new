import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const NavLink = ({ href, children, isExternal }: NavLinkProps) => {
  const navigate = useNavigate();
  const baseClasses = "relative py-2 text-gray-600 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full";
  
  const handleClick = (e: React.MouseEvent) => {
    if (href === '/') {
      e.preventDefault();
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  };

  if (isExternal || href.startsWith('#')) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <Link to={href} className={baseClasses} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavLink;