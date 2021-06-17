import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import BackgroundColor from './background-color';
import TextColor from './text-color';
import LinkColor from './link-color';
import Username from './username';

const SettingsButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0);
  border: 1px solid;
  color: ${(props) => (props.linkColor ? props.linkColor : '#2aa198')};
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
`;

const SettingsContainer = styled.div`
  max-width: 880px;
  margin: 0 auto;
`;

const SettingsContainerColors = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
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
    border-top: none;
    border-radius: 0 0 3px 3px;
    margin: -5px 0 0;
    display: block;
    padding: 10px 6px 6px;
    color: ${(props) => (props.textColor ? props.textColor : '#93a1a1')};
    text-align: center;
  }
`;

function Settings(props) {
  const {
    settingsActive,
    setSettingsActive,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    linkColor,
    setLinkColor,
    username,
    setUsername,
  } = props;

  return (
    <>
      <SettingsButton linkColor={linkColor} onClick={() => setSettingsActive(!settingsActive)}>
        {settingsActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCog} />}
      </SettingsButton>
      {settingsActive ? (
        <SettingsContainer>
          <Username username={username} setUsername={setUsername} textColor={textColor} linkColor={linkColor} />
          <SettingsContainerColors textColor={textColor}>
            <BackgroundColor backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
            <TextColor textColor={textColor} setTextColor={setTextColor} />
            <LinkColor linkColor={linkColor} setLinkColor={setLinkColor} />
          </SettingsContainerColors>
        </SettingsContainer>
      ) : null}
    </>
  );
}

export default Settings;
