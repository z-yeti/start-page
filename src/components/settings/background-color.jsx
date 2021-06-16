import { HexColorPicker, HexColorInput } from "react-colorful";

function BackgroundColor(props) {
  const { backgroundColor, setBackgroundColor } = props;
  const setBackgroundInLocalStorage = (e) => {
    setBackgroundColor(e);
    localStorage.setItem("start-page-background", e);
  };
  return (
    <div>
      <label htmlFor="backgroundColorInput">Background Color</label>
      <HexColorPicker
        color={backgroundColor}
        onChange={(e) => {
          setBackgroundInLocalStorage(e);
        }}
      />
      <HexColorInput
        id="backgroundColorInput"
        color={backgroundColor}
        onChange={(e) => {
          setBackgroundInLocalStorage(e);
        }}
      />
    </div>
  );
}

export default BackgroundColor;
