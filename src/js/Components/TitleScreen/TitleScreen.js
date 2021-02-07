import React from "react";
import TitleScreenButtons from "@js/Components/TitleScreenButtons/TitleScreenButtons";

const TitleScreen = () => {
  // state = x.  if state = x show TitleScreenButtons
  // pass state as prop to that child component from here
  // for click on buttons to update this state value and show one of the other components on update
  return (
    <div className="bg-black  h-screen flex justify-center items-center text-center">
      <TitleScreenButtons />
    </div>
  );
};

export default TitleScreen;
