import React from "react";
import { BsDownload } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import "./questCard.scss";

export const QuestCard = ({ title, contentText, type }) => {
  return (
    <div className="quest-card quest-card--${type}">
      <div className="quest-card__logo-wrapper">
        <BsDownload className="quest-card__logo" />
      </div>
      <div className="quest-card__content-wrapper">
        <h3 className="quest-card__title">{title}</h3>
        <p className="quest-card__content">{contentText}</p>
      </div>
      <div className="quest-card__action-wrapper">
        <BsArrowUpRight
        className="quest-card__action-icon" />
      </div>
    </div>
  );
};
