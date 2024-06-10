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

export const QuestCard = ({ type, company, due_date, job, contact }) => {
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(
      new Date(dateString)
    );
  };

  const truncateText = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

  const renderIcon = () => {
    const commonClass = "quest-card__logo";
    switch (type) {
      case "install_extension":
        return (
          <BsDownload className={`${commonClass} ${commonClass}--${type}`} />
        );
      case "submit_application":
        return (
          <IoPaperPlaneOutline
            className={`${commonClass} ${commonClass}--${type}`}
          />
        );
      case "resolve-comment":
        return (
          <TfiCommentAlt className={`${commonClass} ${commonClass}--${type}`} />
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
        return (
          <img src={company.logo_url} className={`${commonClass}--company`} />
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (type) {
      case "install_extension":
        return {
          header: (
            <h3 className="quest-card__title">
              Install the CareerOS Chrome Extension
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Unlock the superpowers of CareerOS with our Chrome Extension. This
              plugin lets you save companies, contacts, and jobs from LinkedIn
              and other job boards. It also lets you access our messaging
              template and send...
            </p>
          ),
        };
      case "submit_application":
        return {
          header: (
            <h3 className="quest-card__title">
              Submit your application for {job.title} at {company.name}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Deadline: {formatDate(due_date)}
            </p>
          ),
        };
      case "resolve-comment":
        return {
          header: (
            <h3 className="quest-card__title">
              Resolve a comment from [CA name]
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              You have an unresolved comment from your Career Advisor.
            </p>
          ),
        };
      case "save_first_company":
        return {
          header: (
            <h3 className="quest-card__title">Save your first company</h3>
          ),
          text: (
            <p className="quest-card__content">
              Browse our company database for your favorite companies or new
              inspiration and save your first company to get started.
            </p>
          ),
        };
      case "schedule_coffee_chat":
        return {
          header: (
            <h3 className="quest-card__title">
              {`Schedule a coffee chat with ${contact.first_name}
              ${contact.last_name} at ${company.name}`}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Get unique insights from your new contact by scheduling an
              informational interview with them. Make sure to use our
              underline-coffee chat tips-underline to prepare for your meeting.
            </p>
          ),
        };
      case "add_contact":
        return {
          header: (
            <h3 className="quest-card__title">
              Save a contact at {company.name}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              You recently saved {company.name}. The next step is to now save a
              contact who’s working there to start networking with.
            </p>
          ),
        };
      case "send_linkedin_message":
        return {
          header: (
            <h3 className="quest-card__title">
              {`Send a LinkedIn message to ${contact.first_name} ${contact.last_name} at ${company.name}`}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Send a customized LinkedIn message to reach out to your new
              contact. Don't worry! We'll help you with the wording.
            </p>
          ),
        };
      case "send_linkedin_connection":
        return {
          header: (
            <h3 className="quest-card__title">
              {`Send a LinkedIn invitation to ${contact.first_name}
              ${contact.last_name} at ${company.name}`}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Send an invitation with a tailored message to your new contact.
              Our AI will help you!
            </p>
          ),
        };
      case "send_first_email":
        return {
          header: (
            <h3 className="quest-card__title">
              {`Send first email to ${contact.first_name}
              ${contact.last_name} at ${company.name}`}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              {`Send a first email to ${contact.first_name}
              ${contact.last_name} at ${company.name} to get a
              conversation started.`}
            </p>
          ),
        };
      case "add_new_contact":
        return {
          header: (
            <h3 className="quest-card__title">
              Save a new contact at {company.name}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              Add another contact to this company to start networking.
            </p>
          ),
        };
      case "send_follow_up_email":
        return {
          header: (
            <h3 className="quest-card__title">
              {`Send follow-up email to ${contact.first_name}
              ${contact.last_name} at ${company.name}`}
            </h3>
          ),
          text: (
            <p className="quest-card__content">
              {`Send a follow-up email to ${contact.first_name}
              ${contact.last_name} at ${company.name} to get a
              conversation started.`}
            </p>
          ),
        };
      default:
        return {
          header: null,
          text: null,
        };
    }
  };

  const content = renderContent();
  const icon = renderIcon();

  return (
    <div className={`quest-card`}>
      <div
        className={`quest-card__logo-wrapper quest-card__logo-wrapper--${type} `}
      >
        {icon}
      </div>
      <div className="quest-card__content-wrapper">
        {content.header}
        {content.text && (
          <p className="quest-card__content">
            {truncateText(content.text.props.children, 200)}
          </p>
        )}
      </div>
      <div className="quest-card__icon-wrapper">
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
