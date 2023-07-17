import React from "react";
//Custom Components
import Cursor from "./cursor_card";
import BiggerTexting from "./bigger_texting_card";
import HeavySpacing from "./heavy_spacing_card";
import HighlightLinks from "./highlight_links_card";

interface SiderConfig {
  content: JSX.Element;
}

export const cardConfigs: SiderConfig[] = [
  {
    content: <BiggerTexting/>
  },
  {
    content: <Cursor/>
  },
  {
    content: <HeavySpacing/>
  },
  {
    content: <HighlightLinks/>
  }
];