import * as React from 'react';
import {useState} from 'react';
//Components
import {Button, Card, Col, Row, Switch} from "antd";
//Config
import {cardConfigs} from "../config";
//Icons
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
//Custom Styles
import '../../styles/index.css'
//Custom Components
import {CustomCard} from "../../components";


interface SideBarProps {
  isSiderVisible: boolean;
  toggleSideBar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isSiderVisible, toggleSideBar }) => {
  const [isSideBarLarge, setIsSideBarLarge] = useState<boolean>(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleToggleWidth = (): void => {
    setIsSideBarLarge((prevState) => !prevState);
  };

  const handleCardClick = (cardId: number): void => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const sidebarWidth = isSideBarLarge ? 400 : 600;

  return (
    <Card
      title="Accessibility Menu"
      className={`sidebar${isSiderVisible ? ' visible' : ''}`}
      style={{ width: `${sidebarWidth}px` }}
      extra={<Button onClick={toggleSideBar} icon={<CloseCircleOutlined />} />}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              onClick={handleToggleWidth}
              style={{
                cursor: 'pointer',
                fontSize: isSideBarLarge ? '14px' : '18px',
                paddingRight: isSideBarLarge ? '150px' : '350px',
              }}
            >
              Oversized Widget
            </span>
            <Switch
              checked={!isSideBarLarge}
              onChange={handleToggleWidth}
              checkedChildren={<CheckCircleOutlined />}
              unCheckedChildren={<CloseCircleOutlined />}
            />
          </div>
        </Col>
        <Col xs={24}>
          <Row gutter={[16, 16]}>
            {cardConfigs.map((config, index) => (
              <Col xs={12} key={index}>
                <CustomCard
                  title={config.title}
                  children={config.content}
                  active={index === selectedCard}
                  onClick={() => handleCardClick(index)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default SideBar;