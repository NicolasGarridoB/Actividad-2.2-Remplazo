import React from 'react';
import { Row, Col, Space } from 'antd';
import { Button, Text } from '../atoms';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className = '', style = {} }) => {
  return (
    <header 
      className={`header ${className}`}
      style={{
        padding: '16px 24px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0',
        ...style
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Text type="title" level={3} style={{ margin: 0, color: '#1890ff' }}>
            Mi Sitio Web
          </Text>
        </Col>
        <Col>
          <Space>
            <Button variant="white">
              Iniciar Sesión
            </Button>
            <Button variant="primary">
              Registrarse
            </Button>
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default Header;