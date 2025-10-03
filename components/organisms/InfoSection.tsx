import React from 'react';
import { Row, Col, Space } from 'antd';
import { InfoCard } from '../molecules';
import { Text } from '../atoms';

interface InfoItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface InfoSectionProps {
  title?: string;
  subtitle?: string;
  items: InfoItem[];
  className?: string;
  style?: React.CSSProperties;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  items,
  className = '',
  style = {}
}) => {
  return (
    <section 
      className={`info-section ${className}`}
      style={{
        padding: '80px 24px',
        backgroundColor: '#fafafa',
        ...style
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {(title || subtitle) && (
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Space direction="vertical" size="middle">
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
              {title && (
                <Text 
                  type="title" 
                  level={2}
                  style={{
                    color: '#262626',
                    margin: 0
                  }}
                >
                  {title}
                </Text>
              )}
            </Space>
          </div>
        )}
        
        <Row gutter={[32, 32]} justify="center">
          {items.map((item, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <InfoCard
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default InfoSection;