import React from 'react';
import { Row, Col, Space, Divider } from 'antd';
import { Text } from '../atoms';

interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ className = '', style = {} }) => {
  return (
    <footer 
      className={`footer ${className}`}
      style={{
        backgroundColor: '#001529',
        color: 'white',
        padding: '48px 24px 24px',
        ...style
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="middle">
              <Text 
                type="title" 
                level={4} 
                style={{ color: 'white', margin: 0 }}
              >
                Mi Sitio Web
              </Text>
              <Text 
                type="paragraph" 
                style={{ color: '#bfbfbf', margin: 0 }}
              >
                Creando experiencias digitales excepcionales para nuestros usuarios.
              </Text>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text 
                type="title" 
                level={5} 
                style={{ color: 'white', margin: 0 }}
              >
                Servicios
              </Text>
              <Text style={{ color: '#bfbfbf' }}>Desarrollo Web</Text>
              <Text style={{ color: '#bfbfbf' }}>Diseño UX/UI</Text>
              <Text style={{ color: '#bfbfbf' }}>Consultoría</Text>
              <Text style={{ color: '#bfbfbf' }}>Soporte</Text>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text 
                type="title" 
                level={5} 
                style={{ color: 'white', margin: 0 }}
              >
                Empresa
              </Text>
              <Text style={{ color: '#bfbfbf' }}>Sobre Nosotros</Text>
              <Text style={{ color: '#bfbfbf' }}>Equipo</Text>
              <Text style={{ color: '#bfbfbf' }}>Carreras</Text>
              <Text style={{ color: '#bfbfbf' }}>Blog</Text>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text 
                type="title" 
                level={5} 
                style={{ color: 'white', margin: 0 }}
              >
                Contacto
              </Text>
              <Text style={{ color: '#bfbfbf' }}>contacto@ejemplo.com</Text>
              <Text style={{ color: '#bfbfbf' }}>+1 (555) 123-4567</Text>
              <Text style={{ color: '#bfbfbf' }}>Santiago, Chile</Text>
            </Space>
          </Col>
        </Row>
        
        <Divider style={{ backgroundColor: '#434343', margin: '32px 0 16px' }} />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: '#8c8c8c' }}>
              © 2025 Mi Sitio Web. Todos los derechos reservados.
            </Text>
          </Col>
          <Col>
            <Space>
              <Text style={{ color: '#8c8c8c' }}>Privacidad</Text>
              <Text style={{ color: '#8c8c8c' }}>Términos</Text>
              <Text style={{ color: '#8c8c8c' }}>Cookies</Text>
            </Space>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;