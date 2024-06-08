import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import "./container.scss";

/**
 * Primary UI component for user interaction
 */
export const Container = ({title}) => {
  return (
    <div className="quest">
      <div className="quest__title">
        {title} <BsInfoCircle className="quest__title-icon" />
      </div>

      <div className="quest-cards">
      Quests
      </div>
    </div>
  );
};
