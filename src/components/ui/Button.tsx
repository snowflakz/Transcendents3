import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-800 text-white hover:bg-primary-700 active:bg-primary-900 shadow-sm hover:shadow',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-400 active:bg-secondary-600 shadow-sm hover:shadow',
    outline: 'bg-transparent border-2 border-primary-800 text-primary-800 hover:bg-primary-50 active:border-primary-900 active:text-primary-900',
    text: 'bg-transparent text-primary-800 hover:bg-primary-50 hover:text-primary-700',
  };
  
  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Disabled class
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;
  
  // Render button or link
  if (href) {
    // External link
    if (external) {
      return (
        <a 
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    // Internal link (React Router)
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;