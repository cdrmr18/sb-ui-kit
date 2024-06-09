import React from "react";
import { BsDownload } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import "./questCard.scss";

export const QuestCard = ({ title, type }) => {
  return (
    <div className={`quest-card`}>
      <div
        className={`quest-card__logo-wrapper quest-card__logo-wrapper--${type} `}
      >
        <BsDownload className={`quest-card__logo quest-card__logo--${type}`} />
      </div>
      <div className="quest-card__content-wrapper">
        <h3 className="quest-card__title">{title}</h3>
        <p className="quest-card__content">
          Unlock the superpowers of CareerOS with our Chrome Extension. This
          plugin lets you save companies, contacts, and jobs from Linkedin and
          other job boards. It also lets you access our messaging template and
          send...
        </p>
      </div>
      <div className="quest-card__action-wrapper">
        <BsArrowUpRight className="quest-card__action-icon" />
      </div>
    </div>
  );
};
