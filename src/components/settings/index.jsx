import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import BackgroundColor from "./background-color";
import TextColor from "./text-color";
import LinkColor from "./link-color";

const SettingsButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0);
  border: 1px solid;
  color: ${(props) => (props.linkColor ? props.linkColor : "#2aa198")};
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
`;

const SettingsContainer = styled.div`

`;

const SettingsContainerColors = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  max-width: 880px;
  & label {
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto 0.5rem;
  }
  & input {
    width: calc(200px - 15px);
    background: none;
    border: 1px solid;
    border-top-color: currentcolor;
    border-top-style: solid;
    border-top-width: 1px;
    border-top: none;
    border-radius: 0 0 3px 3px;
    margin: -5px 0 0;
    display: block;
    padding: 10px 6px 6px;
    color: ${(props) => (props.textColor ? props.textColor : "#93a1a1")};
    text-align: center;
  }
`;

function Settings(props) {
  const {
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    linkColor,
    setLinkColor,
  } = props;
  const [settingsActive, setSettingsActive] = useState(false);

  return (
    <div>
      <SettingsButton
        linkColor={linkColor}
        onClick={() => setSettingsActive(!settingsActive)}
      >
        <FontAwesomeIcon icon={faCog} />
      </SettingsButton>
      {settingsActive ? (
        <SettingsContainer>
          <SettingsContainerColors textColor={textColor}>
            <BackgroundColor
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />
            <TextColor textColor={textColor} setTextColor={setTextColor} />
            <LinkColor linkColor={linkColor} setLinkColor={setLinkColor} />
          </SettingsContainerColors>
        </SettingsContainer>
      ) : null}
    </div>
  );
}

export default Settings;
