import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
}

/**
 * Button Component - Reusable button with multiple variants
 * Variants: primary (solid green), secondary (accent lime), outline
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-[#0B5D3A] text-white hover:bg-[#0A4E2F] focus:ring-[#0B5D3A]',
    secondary:
      'bg-[#8CC63F] text-[#1B1B1B] hover:bg-[#7AB535] focus:ring-[#8CC63F]',
    outline:
      'border-2 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#F5F5F5] focus:ring-[#1B1B1B]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
