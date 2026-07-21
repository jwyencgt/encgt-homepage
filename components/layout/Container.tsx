import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container - Reusable max-width wrapper
 * Ensures consistent max-width (1440px) and responsive padding across the site
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
