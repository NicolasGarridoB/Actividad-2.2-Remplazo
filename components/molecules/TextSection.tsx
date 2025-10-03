import React from 'react';
import { Space } from 'antd';
import { Text } from '../atoms';

interface TextSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
  align?: 'left' | 'center' | 'right';
}

const TextSection: React.FC<TextSectionProps> = ({
  title,
  subtitle,
  description,
  className = '',
  style = {},
  align = 'center'
}) => {
  return (
    <div 
      className={`text-section ${className}`}
      style={{
        textAlign: align,
        ...style
      }}
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {subtitle && (
          <Text 
            type="text" 
            style={{ 
              color: '#1890ff',
              fontSize: '16px',
              fontWeight: 500
            }}
          >
            {subtitle}
          </Text>
        )}
        <Text 
          type="title" 
          level={1}
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#262626',
            margin: 0,
            lineHeight: '1.2'
          }}
        >
          {title}
        </Text>
        <Text 
          type="paragraph"
          style={{
            fontSize: '18px',
            color: '#595959',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          {description}
        </Text>
      </Space>
    </div>
  );
};

export default TextSection;