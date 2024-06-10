import React, { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { QuestList } from "../list/QuestList.jsx";
import { questsData } from "../../../data/quests";
import "./questContainer.scss";

export const QuestContainer = ({ title }) => {
  const [quests, setQuests] = useState(questsData);

  useEffect(() => {
    fetch("/quests")
      .then((response) => response.json())
      .then((data) => setQuests(data))
      .catch((error) => console.error("Error fetching quests:", error));
  }, []);

  return (
    <div className="quest-container">
      <div className="quest-container__header">
        <h3 className="quest-container__title">{title}</h3>
        <BsInfoCircle className="quest-container__icon" />
      </div>
      <QuestList quests={quests} />
    </div>
  );
};
