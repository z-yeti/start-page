import { HexColorPicker, HexColorInput } from "react-colorful";

function TextColor(props) {
  const { textColor, setTextColor } = props;
  const setTextColorInLocalStorage = (e) => {
    setTextColor(e);
    localStorage.setItem("start-page-text-color", e);
  };
  return (
    <div>
      <label htmlFor="textColorInput">Text Color</label>
      <HexColorPicker
        color={textColor}
        onChange={(e) => {
          setTextColorInLocalStorage(e);
        }}
      />
      <HexColorInput
        id="textColorInput"
        color={textColor}
        onChange={(e) => {
          setTextColorInLocalStorage(e);
        }}
      />
    </div>
  );
}

export default TextColor;
