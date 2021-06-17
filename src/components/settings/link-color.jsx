import styled from 'styled-components';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const LinkLabel = styled.label`
  color: ${(props) => (props.linkColor ? props.linkColor : '#2aa198')};
`;

function LinkColor(props) {
  const { linkColor, setLinkColor } = props;
  const setLinkColorInLocalStorage = (e) => {
    setLinkColor(e);
    localStorage.setItem('start-page-text-color', e);
  };
  return (
    <div>
      <LinkLabel htmlFor='linkColorInput'>Link Color</LinkLabel>
      <HexColorPicker
        color={linkColor}
        onChange={(e) => {
          setLinkColorInLocalStorage(e);
        }}
      />
      <HexColorInput
        id='linkColorInput'
        color={linkColor}
        onChange={(e) => {
          setLinkColorInLocalStorage(e);
        }}
      />
    </div>
  );
}

export default LinkColor;
