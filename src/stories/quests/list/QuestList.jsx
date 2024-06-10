import React from "react";
import { QuestCard } from '../card/QuestCard';
import "./questList.scss";

export const QuestList = ({ quests }) => {
    return (
    <div className="quest-list">
      {quests.map((quest, index) => (
        <QuestCard key={index} {...quest} />
      ))}
    </div>
  );
};

