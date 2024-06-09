import { QuestCard } from "./QuestCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/QuestCard",
  component: QuestCard,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Quest = {
  args: {
    title: "Install the CareerOS Chrome Extension",
    type: "install_extension",
  },
};
