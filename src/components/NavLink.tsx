import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ to, children, onClick, className }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "relative transition-colors duration-300 hover:text-accent",
        "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0",
        "after:bg-accent after:transition-all after:duration-300",
        "hover:after:w-full",
        isActive && "after:w-full",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
