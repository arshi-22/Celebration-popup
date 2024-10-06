"use client";

import { useState } from "react";
import "./styles.css";
import RewardsCelebration from "./components/Rewards/RewardsCelebration";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRewards = () => {
    setShowPopup(true);
  };

  return !showPopup ? (
    <div className="container">
      <div className="buttons">
        <button className="button">Continue</button>
        <button className="button">New Game</button>
        <button className="button">Exit</button>
        <button className="button reward-button" onClick={handleRewards}>
          Rewards
        </button>
      </div>
    </div>
  ) : (
    <RewardsCelebration setShowPopup={setShowPopup} />
  );
};

export default HomePage;
