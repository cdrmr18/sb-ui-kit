# Quest Container Project

## Overview

This project is a feature implementation for a Quest Container using React and SCSS, following the BEM methodology. The Quest Container dynamically displays different types of quests based on data fetched from a mocked API.

## Features

- **Quest Container**: A container that holds different types of quests.
- **Quest Card**: Individual cards for each quest with dynamic content and icons.
- **Data Fetching**: Mocked API call to fetch quests data.
- **Styling**: Uses SCSS with BEM methodology for styling.
- **Storybook**: Components documented and tested with Storybook.

## Technologies

- React
- SCSS
- BEM Methodology
- Storybook

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/cdrmr18/sb-ui-kit.git
    cd sb-ui-kit
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run Storybook**:
    ```bash
    npm run storybook
    ```

## Project Structure

src/
├── components/
│ ├── QuestCard/
│ │ ├── QuestCard.jsx
│ │ ├── questCard.scss
│ │ └── QuestCard.stories.js
│ ├── QuestContainer/
│ │ ├── QuestContainer.jsx
│ │ ├── questContainer.scss
│ │ └── QuestContainer.stories.js
│ ├── QuestList/
│   ├── QuestList.jsx
│   ├── questList.scss
│   └── QuestList.stories.js
├── data/
│ └── quests.js
└── index.js


## Components

### QuestCard

**Props**:
- `title` (string): The title of the quest.
- `type` (string): The type of the quest.
- `company` (object): The company related to the quest.
- `contact` (object): The contact related to the quest.
- `due_date` (string): The due date of the quest.

### QuestContainer

**Props**:
- `title` (string): The title of the container.

### QuestList

**Props**:
- `quests` (array): An array of quest objects.

## Styling


## Mock Data
The data/quests.js file contains the mocked data for the quests. This data is used to simulate the API response for the /quests endpoint.
