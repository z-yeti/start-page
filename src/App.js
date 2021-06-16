import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Settings from "./components/settings/index";
import Search from "./components/search";
import Welcome from "./components/welcome";
import DateTime from "./components/date-time";
import Weather from "./components/weather";
import Links from "./components/links";

const BaseContainer = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 3rem;
`;

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#073642");
  const [textColor, setTextColor] = useState("#93a1a1");
  const [linkColor, setLinkColor] = useState("#2aa198");

  useEffect(() => {
    const storedBackground = localStorage.getItem("start-page-background")
    const storedTextColor = localStorage.getItem("start-page-text-color")
    const storedLinkColor = localStorage.getItem("start-page-link-color")

    if (storedBackground) {
      setBackgroundColor(storedBackground);
    }
    if (storedTextColor) {
      setTextColor(storedTextColor);
    }
    if (storedLinkColor) {
      setLinkColor(storedLinkColor);
    }

  }, []);

  return (
    <BaseContainer
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <Settings
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        textColor={textColor}
        setTextColor={setTextColor}
        linkColor={linkColor}
        setLinkColor={setLinkColor}
      />
      <Search textColor={textColor} />
      <Welcome />
      <DateTime />
      <Weather />
      <Links linkColor={linkColor} backgroundColor={backgroundColor} />
    </BaseContainer>
  );
}

export default App;