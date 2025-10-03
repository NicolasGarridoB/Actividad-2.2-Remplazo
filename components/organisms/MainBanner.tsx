import React from 'react';
import { Row, Col, Space } from 'antd';
import { TextSection, ButtonGroup } from '../molecules';

interface MainBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MainBanner: React.FC<MainBannerProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  className = '',
  style = {}
}) => {
  const bannerStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: backgroundImage 
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px 24px',
    ...style
  };

  return (
    <section className={`main-banner ${className}`} style={bannerStyle}>
      <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
        <Row justify="center">
          <Col xs={24} md={20} lg={16}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <TextSection
                title={title}
                subtitle={subtitle}
                description={description}
                align="center"
                style={{
                  color: 'white'
                }}
              />
              
              <div style={{ marginTop: '40px' }}>
                <ButtonGroup
                  primaryText={primaryButtonText}
                  secondaryText={secondaryButtonText}
                  onPrimaryClick={onPrimaryClick}
                  onSecondaryClick={onSecondaryClick}
                />
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MainBanner;