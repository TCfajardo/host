import React from "react";
import ReactDOM from "react-dom/client";

import ColorPicker from "mfColorPicker/ColorPicker";
import ColorList from "mfColorList/ColorList";
import useColors from "mfColorPicker/useColors";

const App = () => {

  const {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors,
  } = useColors();

  return (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color picker</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList
              colorsList={colorsList}
              handleClickClearColors={handleClickClearColors}
            />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker
              color={color}
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </div>
        </div>
      </div>
    </>
  )
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);