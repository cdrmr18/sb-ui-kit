import { fn } from "@storybook/test";
import { QuestContainer } from "./QuestContainer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/QuestContainer",
  component: QuestContainer,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Quest = {
  args: {
    title: "Quests",
  },
};
