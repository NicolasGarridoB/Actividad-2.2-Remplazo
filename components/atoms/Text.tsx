import React from 'react';
import { Typography } from 'antd';

const { Title, Text: AntText, Paragraph } = Typography;

interface TextProps {
  type?: 'title' | 'text' | 'paragraph';
  level?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  size?: 'small' | 'default' | 'large';
}

const Text: React.FC<TextProps> = ({ 
  type = 'text', 
  level = 1, 
  children, 
  className = '',
  style = {},
  color,
  size = 'default',
  ...props 
}) => {
  const textStyle = {
    ...style,
    ...(color && { color }),
    ...(size === 'small' && { fontSize: '12px' }),
    ...(size === 'large' && { fontSize: '18px' }),
  };

  if (type === 'title') {
    return (
      <Title 
        level={level} 
        className={className} 
        style={textStyle}
        {...props}
      >
        {children}
      </Title>
    );
  }

  if (type === 'paragraph') {
    return (
      <Paragraph 
        className={className} 
        style={textStyle}
        {...props}
      >
        {children}
      </Paragraph>
    );
  }

  return (
    <AntText 
      className={className} 
      style={textStyle}
      {...props}
    >
      {children}
    </AntText>
  );
};

export default Text;