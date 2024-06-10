import { QuestList } from "./QuestList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/QuestList",
  component: QuestList,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Quest = {
  args: {
    title: "Quests",
    quests: [
      {
        id: "1",
        user_id: "00000000-0000-0000-0000-000000000000",
        type: "install_extension",
        status: "todo",
        experience_points: 0,
        due_date: "2024-01-16T15:38:19.879706Z",
        company: null,
        contact: {},
        job: {},
        created_at: "2024-01-16T15:38:19.892931Z",
      },
      {
        id: "2",
        user_id: "00000000-0000-0000-0000-000000000000",
        type: "submit_application",
        status: "todo",
        experience_points: 0,
        due_date: "2024-05-22T06:35:55.734652Z",
        company: {
          id: "2",
          name: "SessionLab",
          logo_url:
            "https://storage.googleapis.com/student-app-documents/company_logos/SessionLab/4c4c7e11-4267-45a2-be27-f29b4517aa75.png",
          linkedin_url: "https://www.linkedin.com/company/sessionlab",
        },
        contact: {},
        job: {
          id: "1",
          title: "Software Engineer",
        },
        created_at: "2024-05-22T06:35:55.736528Z",
      },
      {
        id: "3",
        user_id: "00000000-0000-0000-0000-000000000000",
        type: "resolve-comment",
        status: "todo",
        experience_points: 0,
        due_date: "2024-05-22T06:39:19.73172Z",
        company: null,
        contact: {},
        job: {},
        created_at: "2024-05-22T06:39:19.732558Z",
      },
      {
        id: "5",
        user_id: "00000000-0000-0000-0000-000000000000",
        type: "save_first_company",
        status: "todo",
        experience_points: 0,
        due_date: "2024-01-19T16:22:48.856446Z",
        company: null,
        contact: {},
        job: {},
        created_at: "2024-01-19T16:22:48.886602Z",
      },
      {
        id: "6",
        user_id: "00000000-0000-0000-0000-000000000000",
        type: "add_contact",
        status: "todo",
        experience_points: 0,
        due_date: "2024-01-19T16:22:50.492004Z",
        company: {
          id: "6",
          name: "Strategy&",
          logo_url:
            "https://storage.googleapis.com/student-app-documents/company_logos/strategy.png",
          linkedin_url: "https://www.linkedin.com/company/strategyand",
        },
        contact: {},
        job: {},
        created_at: "2024-01-19T16:22:50.505137Z",
      },
    ],
  },
};
