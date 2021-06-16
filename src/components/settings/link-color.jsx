import { HexColorPicker, HexColorInput } from "react-colorful";

function LinkColor(props) {
  const { linkColor, setLinkColor } = props;
  const setLinkColorInLocalStorage = (e) => {
    setLinkColor(e);
    localStorage.setItem("start-page-text-color", e);
  };
  return (
    <div>
      <label htmlFor="linkColorInput">Link Color</label>
      <HexColorPicker
        color={linkColor}
        onChange={(e) => {
          setLinkColorInLocalStorage(e);
        }}
      />
      <HexColorInput
        id="linkColorInput"
        color={linkColor}
        onChange={(e) => {
          setLinkColorInLocalStorage(e);
        }}
      />
    </div>
  );
}

export default LinkColor;
