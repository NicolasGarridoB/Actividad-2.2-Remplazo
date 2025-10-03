import React from 'react';
import { Layout } from 'antd';
import { Header } from '../molecules';

const { Content } = Layout;

interface HomeLayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ 
  children, 
  className = '',
  style = {} 
}) => {
  return (
    <Layout 
      className={`home-layout ${className}`} 
      style={{ minHeight: '100vh', ...style }}
    >
      <Header />
      
      <Content style={{ flex: 1 }}>
        {children}
      </Content>
    </Layout>
  );
};

export default HomeLayout;