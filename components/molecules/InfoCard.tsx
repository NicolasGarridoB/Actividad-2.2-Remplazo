import React from 'react';
import { Card } from 'antd';
import { Text, Image } from '../atoms';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
  className = '',
  style = {}
}) => {
  return (
    <Card
      className={`info-card ${className}`}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        height: '100%',
        ...style
      }}
      cover={
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
      }
    >
      <div style={{ padding: '16px' }}>
        <Text 
          type="title" 
          level={4} 
          style={{ 
            marginBottom: '12px',
            color: '#262626'
          }}
        >
          {title}
        </Text>
        <Text 
          type="paragraph" 
          style={{ 
            color: '#595959',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          {description}
        </Text>
      </div>
    </Card>
  );
};

export default InfoCard;