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
        <div style={{ 
          height: '240px', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            preview={false}
          />
        </div>
      }
    >
      <Text 
        type="title" 
        level={5} 
        style={{ 
          marginBottom: '8px',
          color: '#262626',
          fontWeight: 600
        }}
      >
        {title}
      </Text>
      <Text 
        type="paragraph" 
        style={{ 
          color: '#595959',
          fontSize: '13px',
          lineHeight: '1.5',
          margin: 0
        }}
      >
        {description}
      </Text>
    </Card>
  );
};

export default InfoCard;