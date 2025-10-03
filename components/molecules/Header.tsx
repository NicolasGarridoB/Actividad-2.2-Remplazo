import React from 'react';
import { Row, Col, Space, Avatar } from 'antd';
import { Button, Text, Image } from '../atoms';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className = '', style = {} }) => {
  return (
    <header 
      className={`header ${className}`}
      style={{
        padding: '12px 48px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0',
        ...style
      }}
    >
      <Row justify="space-between" align="middle" style={{ width: '100%' }}>
        <Col>
          <Text type="title" level={4} style={{ margin: 0, color: '#1890ff', fontWeight: 600 }}>
            Página Nicolás Garrido
          </Text>
        </Col>
        
        <Col flex="1" style={{ display: 'flex', justifyContent: 'center' }}>
          <Space size="large">
            <Text style={{ color: '#666', fontSize: '14px', cursor: 'pointer' }}>
              Browse
            </Text>
            <Text style={{ color: '#666', fontSize: '14px', cursor: 'pointer' }}>
              My Learning
            </Text>
            <Text style={{ color: '#666', fontSize: '14px', cursor: 'pointer' }}>
              Wishlist
            </Text>
          </Space>
        </Col>
        
        <Col>
          <Space align="center">
            <Text style={{ color: '#666', fontSize: '14px', cursor: 'pointer' }}>
              Log in
            </Text>
            <Avatar 
              src="/assets/profile_icon.png"
              size={32}
              style={{ cursor: 'pointer' }}
            />
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default Header;