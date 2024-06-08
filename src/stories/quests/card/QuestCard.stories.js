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
    contentText:
      "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send...",
  },
};
