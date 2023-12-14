import React, { useState } from "react";
import ChristmasPhoto from "../assets/a_background_of_a_christmas_scene_with_a_christm.jpg";
import NewfoundlandPhoto from "../assets/erik-mclean-oc7I7D3bjw0-unsplash.jpg";

const Splash = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const handleToggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const handleToggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  return (
    <div className="flex w-full flex-row items-center justify-center">
      {showDiv1 && (
        <div>
          <div>
            <img
              className="mb-4 mt-4 h-96"
              src={NewfoundlandPhoto}
              alt="christmas photo"
            ></img>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-LovedbytheKing text-5xl text-white">
            Explore Newfoundland
          </div>
        </div>
      )}
      {showDiv2 && (
        <div>
          <div>
            <img
              className="mb-4 mt-4 h-96"
              src={ChristmasPhoto}
              alt="christmas photo"
            ></img>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-LovedbytheKing text-5xl text-white">
            Happy Holidays!
          </div>
        </div>
      )}
      <button>
        <div
          onClick={handleToggleDiv2}
          className="top-1/2.5 absolute left-1/3 -translate-x-1/2 -translate-y-1/2 transform text-3xl text-white"
        >
          &lt;
        </div>
      </button>
      <button>
        <div
          onClick={handleToggleDiv1}
          className="top-1/2.5 absolute right-1/3 -translate-x-1/2 -translate-y-1/2 transform text-3xl text-white"
        >
          &gt;
        </div>
      </button>
    </div>
  );
};

export default Splash;
