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

export const QuestCard = ({ type, company }) => {
  const renderIcon = () => {
    const commonClass = "quest-card__logo";
    switch (type) {
      case "install_extension":
        return (
          <BsDownload
            className={`${commonClass} ${commonClass}--${type}`}
          />
        );
      case "submit_application":
        return (
          <IoPaperPlaneOutline
            className={`${commonClass} ${commonClass}--${type}`}
          />
        );
      case "resolve-comment":
        return (
          <TfiCommentAlt
            className={`${commonClass} ${commonClass}--${type}`}
          />
        );
      case "save_first_company":
        return (
          <BsBookmarkHeart
            className={`${commonClass} ${commonClass}--${type}`}
          />
        );
      case "schedule_coffee_chat":
        return (
          <VscCoffee className={`${commonClass} ${commonClass}--${type}`} />
        );
      case "add_contact":
      case "send_linkedin_message":
      case "send_linkedin_connection":
      case "send_first_email":
      case "add_new_contact":
      case "send_follow_up_email":
        return <img
            src={company.logo_url}
            className={`${commonClass}--company`}
          />;
      default:
        return null
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
