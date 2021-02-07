import React from "react";

const TitleScreen = () => {
  return (
    <div className="bg-black  h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="headline  text-white">TileDrop2.1</h1>
        <button className="button button--primary  mx-16">Info</button>
        <button className="button button--secondary  mx-16">Play</button>
      </div>
    </div>
  );
};

export default TitleScreen;
