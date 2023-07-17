import * as React from 'react';
import {useState} from 'react';
//Components
import {Button, Card, Col, Row, Switch} from "antd";
//Config
import {cardConfigs} from "./config";
//Icons
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
//Custom Styles
import '../../styles/index.css'

const SideBar = ({ isSiderVisible, toggleSideBar }: { isSiderVisible: boolean, toggleSideBar: () => void}) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(400);

  const handleToggleWidth = () => {
    setSidebarWidth(sidebarWidth === 400 ? 600 : 400);
  };

  return (
    <Card
      title="Accessibility Menu"
      className={`sidebar${isSiderVisible ? " visible" : ""}`}
      style={{ width: `${sidebarWidth}px` }}
      extra={<Button onClick={toggleSideBar} icon={<CloseCircleOutlined/>}/>}
    >
      <Row gutter={[16,16]}>
        <Col xs={24}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              onClick={handleToggleWidth}
              style={{
                cursor: 'pointer',
                fontSize: sidebarWidth === 400 ? '14px' : '18px',
                paddingRight: sidebarWidth === 400 ? '150px' : '350px',
              }}
            >
              Oversized Widget
            </span>
            <Switch
              checked={sidebarWidth === 600}
              onChange={handleToggleWidth}
              checkedChildren={<CheckCircleOutlined />}
              unCheckedChildren={<CloseCircleOutlined />}
            />
          </div>
        </Col>
        <Col xs={24}>
          <Row gutter={[16,16]}>
            {cardConfigs.map((config, index) => (
              <Col xs={12} key={index}>
                <Card bordered={false}>
                  {config.content}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default SideBar;