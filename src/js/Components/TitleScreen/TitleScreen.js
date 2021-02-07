/*
TODO:
update a state value to show titlescreenbuttons or gameinfo or gameboard
default should be titlescreenbuttons and then clicking on one of the buttons should update the state
to show THAT component

*/

import React from "react";
import TitleScreenButtons from "@js/Components/TitleScreenButtons/TitleScreenButtons";

const TitleScreen = () => {
  return (
    <div className="bg-black  h-screen flex justify-center items-center text-center">
      <TitleScreenButtons />
    </div>
  );
};

export default TitleScreen;
