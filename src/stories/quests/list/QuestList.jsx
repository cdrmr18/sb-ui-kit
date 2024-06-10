import React from "react";
import { QuestCard } from '../card/QuestCard';
import "./questList.scss";

export const QuestList = ({ quests }) => {
    return (
    <div className="quest-list">
      {quests.map((quest) => (
        <QuestCard key={quest.id} {...quest} />
      ))}
    </div>
  );
};

