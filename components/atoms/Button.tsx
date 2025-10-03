import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps } from 'antd';

interface CustomButtonProps extends Omit<ButtonProps, 'type'> {
  variant?: 'primary' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const getButtonStyles = () => {
    if (variant === 'white') {
      return {
        backgroundColor: 'white',
        color: '#000',
        border: '1px solid #d9d9d9',
        ...props.style
      };
    }
    return props.style;
  };

  return (
    <AntButton
      {...props}
      type={variant === 'white' ? 'default' : 'primary'}
      style={getButtonStyles()}
      className={`${variant === 'white' ? 'btn-white' : ''} ${className}`}
    >
      {children}
    </AntButton>
  );
};

export default Button;