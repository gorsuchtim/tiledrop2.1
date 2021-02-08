import React, { useState } from "react";
import TitleScreenButtons from "@js/Components/TitleScreenButtons/TitleScreenButtons";

const TitleScreen = () => {
  // state = x.  if state = x show TitleScreenButtons
  // pass state as prop to that child component from here
  // for click on buttons to update this state value and show one of the other components on update

  const [componentToShow, setComponentToShow] = useState("TitleScreen");

  const handleComponentToShow = event => {
    const control = event.currentTarget;
    const updatedComponentValue = control.getAttribute("data-show-component");
    setComponentToShow(updatedComponentValue);
    // HOWTO? pass this function to a child component with a prop
    // TODO setComponentToShow(updatedValue)
  };

  return (
    <div className="bg-black  h-screen flex justify-center items-center text-center">
      {/* <TitleScreenButtons /> */}
      <button
        onClick={handleComponentToShow}
        className="button button--primary mx-16"
        data-show-component="GameInfo"
      >
        Info
      </button>

      <button
        onClick={handleComponentToShow}
        className="button button--secondary mx-16"
        data-show-component="GameBoard"
      >
        Play
      </button>

      <h1>{componentToShow}</h1>
    </div>
  );
};

export default TitleScreen;
