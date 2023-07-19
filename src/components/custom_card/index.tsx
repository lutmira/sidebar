import React, { ReactNode } from 'react';
// Components
import { Card, Col, Row } from 'antd';
// Icons
import { CheckCircleOutlined } from '@ant-design/icons';

interface CustomCardProps {
  title: string;
  active: boolean
  children: ReactNode;
  onClick: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children, onClick, active }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = (isHovered: boolean) => {
    setIsHovered(isHovered);
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <Card
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        border: isHovered ? '2px solid #364d79' : 'none',
      }}
    >
      <>
        {active && (
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <CheckCircleOutlined style={{ fontSize: 24, color: '#364d79' }} />
          </div>
        )}
        <Row gutter={[16, 16]}>
          <Col xs={24}>{title}</Col>
          <Col xs={24}>{children}</Col>
        </Row>
      </>
    </Card>
  );
};

export default CustomCard;