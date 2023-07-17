import React, {useState} from 'react';
//Components
import {Button} from "antd";
//Custom Styles
import '../styles/index.css'
//Custom Components
import SideBar from "./sidebar";

const App: React.FC = () => {
  const [isSiderVisible, setSiderVisible] = useState<boolean>(false);

  const toggleSideBar = (): void => {
    setSiderVisible((prevState) => !prevState);
  };

  return (
    <>
      {!isSiderVisible &&
        <Button
          disabled={isSiderVisible}
          className='sidebar-button'
          onClick={toggleSideBar}
        >
          <img
            src="https://icons.iconarchive.com/icons/xenatt/the-circle/64/App-Accessibility-icon.png"
            alt="icon"
            width="64"
            height="64"
          />
        </Button>
      }
      {isSiderVisible && <SideBar isSiderVisible={isSiderVisible} toggleSideBar={toggleSideBar}/>}
    </>
  );
};

export default App;