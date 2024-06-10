import React from "react";
import { BsDownload } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsBookmarkHeart } from "react-icons/bs";
import { VscCoffee } from "react-icons/vsc";
import "./questCard.scss";

export const QuestCard = ({ title, type }) => {
  const renderIcon = () => {
    switch (type) {
      case "install_extension":
        return (
          <BsDownload
            className={`quest-card__logo quest-card__logo--${type}`}
          />
        );
      case "submit_application":
        return (
          <IoPaperPlaneOutline
            className={`quest-card__logo quest-card__logo--${type}`}
          />
        );
      case "resolve-comment":
        return (
          <TfiCommentAlt
            className={`quest-card__logo quest-card__logo--${type}`}
          />
        );
      case "save_first_company":
        return (
          <BsBookmarkHeart
            className={`quest-card__logo quest-card__logo--${type}`}
          />
        );
      case "add_contact":
        return (
          <p>img</p>
        );
      case "send_linkedin_message":
        return <p>img</p>;
      case "send_linkedin_connection":
        return <p>img</p>;
      case "send_first_email":
        return <p>img</p>;
      case "add_new_contact":
        return <p>img</p>;
      case "schedule_coffee_chat":
        return (
          <VscCoffee className={`quest-card__logo quest-card__logo--${type}`} />
        );
      case "send_follow_up_email":
        return (
          <p>img</p>
        );
      default:
        return null;
    }
  };
  return (
    <div className={`quest-card`}>
      <div
        className={`quest-card__logo-wrapper quest-card__logo-wrapper--${type} `}
      >
        {renderIcon()}
      </div>
      <div className="quest-card__content-wrapper">
        <h3 className="quest-card__title">
          Install the CareerOS Chrome Extension
        </h3>
        <p className="quest-card__content">
          Unlock the superpowers of CareerOS with our Chrome Extension. This
          plugin lets you save companies, contacts, and jobs from Linkedin and
          other job boards. It also lets you access our messaging template and
          send...
        </p>
      </div>
      <div>
        <div className="quest-card__close">
          <IoIosCheckmark />
          <IoCloseOutline />
        </div>
        <div className="quest-card__action-wrapper">
          <BsArrowUpRight className="quest-card__action-icon" />
        </div>
      </div>
    </div>
  );
};
