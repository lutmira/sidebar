import React from "react";
//Custom Components
import Cursor from "./sidebar/cursor_card";
import BiggerTexting from "./sidebar/bigger_texting_card";
import HeavySpacing from "./sidebar/heavy_spacing_card";
import HighlightLinks from "./sidebar/highlight_links_card";

interface SiderConfig {
  title: string;
  content: JSX.Element;
}

export const cardConfigs: SiderConfig[] = [
  {
    title: 'BiggerTexting',
    content: <BiggerTexting/>
  },
  {
    title: 'Cursor',
    content: <Cursor/>
  },
  {
    title: 'HeavySpacing',
    content: <HeavySpacing/>
  },
  {
    title: 'HighlightLinks',
    content: <HighlightLinks/>
  }
];