import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

/**
 * Card Component - Reusable premium card
 * Features:
 * - Rounded corners (24px)
 * - Subtle border
 * - Soft shadow
 * - Hover lift animation
 * - Apple / Tesla aesthetic
 * Used for: Products, Applications, Technology, Partners
 */
export default function Card({
  children,
  className = '',
  href,
  onClick,
}: CardProps) {
  const baseStyles =
    'rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0B5D3A] focus:ring-offset-2';

  const element = href ? 'a' : 'div';
  const Element = element as any;

  return (
    <Element
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${href ? 'block cursor-pointer hover:no-underline' : ''} ${className}`}
    >
      {children}
    </Element>
  );
}
