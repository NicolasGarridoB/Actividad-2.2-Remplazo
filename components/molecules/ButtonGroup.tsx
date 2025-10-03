import React from 'react';
import { Space } from 'antd';
import { Button } from '../atoms';

interface ButtonGroupProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
  style = {},
  direction = 'horizontal'
}) => {
  return (
    <div className={`button-group ${className}`} style={style}>
      <Space 
        direction={direction} 
        size="large"
        style={{ justifyContent: 'center' }}
      >
        <Button 
          variant="primary" 
          size="large"
          onClick={onPrimaryClick}
          style={{
            height: '50px',
            padding: '0 32px',
            fontSize: '16px',
            fontWeight: 500
          }}
        >
          {primaryText}
        </Button>
        <Button 
          variant="white" 
          size="large"
          onClick={onSecondaryClick}
          style={{
            height: '50px',
            padding: '0 32px',
            fontSize: '16px',
            fontWeight: 500,
            border: '2px solid #d9d9d9'
          }}
        >
          {secondaryText}
        </Button>
      </Space>
    </div>
  );
};

export default ButtonGroup;