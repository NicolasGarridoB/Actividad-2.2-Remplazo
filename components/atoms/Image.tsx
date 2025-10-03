import React from 'react';
import { Image as AntImage } from 'antd';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  preview?: boolean;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  style = {},
  preview = false,
  ...props 
}) => {
  return (
    <AntImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      preview={preview}
      {...props}
    />
  );
};

export default Image;