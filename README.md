<----------------------------------------------- PROGRESSO -------------------------------------------->

# Project Overview :
Progresso is a React-based productivity tracking web application that combines task management with an interactive heatmap visualization system. The project helps users manage daily tasks using a Kanban-style interface while simultaneously visualizing productivity and consistency over time.
The application is inspired by GitHub’s contribution graph and extends it by integrating drag-and-drop task management, real-time heatmap updates, dark/light theme switching, and multiple pages using React Router.
The project is designed with a modern aesthetic UI using Tailwind CSS and supports responsive layouts for a clean user experience.

# Objectives :
* To track daily productivity through completed tasks
* To visualize productivity using a heatmap system
* To implement drag-and-drop task management
* To analyze consistency and activity trends
* To build a multi-page React application
* To practice React hooks, routing, conditional rendering, and state management
* To create a modern responsive UI using Tailwind CSS

# Features :

--> Multi-Page Application :
* Dashboard Page
* Tasks Page
* Heatmap Analytics Page
* About Page
* Navigation using React Router DOM

--> Task Management System :
* Add new tasks using modal form
* Task title, description, priority, and due date support
* Separate Pending and Completed sections
* Drag and drop functionality between sections
* Completed tasks visually appear crossed out
* Completed task cards change color dynamically

--> Productivity Heatmap :
* Displays activity for the last 30 days
* Heatmap updates dynamically based on completed tasks
* Only the current day updates in real-time
* Previous days contain fixed random productivity data
* Hover tooltips display: date,number of completed tasks
* Dynamic color intensity based on task count

--> Theme Toggle :
* Light Mode
* Dark Mode
* Dynamic UI color switching
* Fully responsive dark theme styling

--> Dynamic UI Features :
* Floating Add Task button
* Responsive layout
* Gradient-based modern UI
* Interactive hover effects
* Aesthetic pink-purple theme

--> Statistics Dashboard :
* Total Tasks
* Completed Tasks
* Pending Tasks
* Productivity insights section

# Tech Stack :

--> React JS :
* Functional Components
* useState Hook
* useMemo Hook
* Conditional Rendering
* Props
* Component-Based Architecture

--> React Router DOM :
* Multi-page navigation
* Route-based rendering

--> JavaScript :
* Arrays and Objects
* Array Methods
* Conditional Logic
* Date Manipulation
* Drag-and-Drop Events
* Dynamic State Updates

--> Tailwind CSS :
* Utility-first styling
* Responsive layouts
* Gradient themes
* Dark mode UI
* Modern card-based design

# Core Logic :

--> Tasks Structure :
{
  id: 1,
  title: "Complete Assignment",
  description: "Solve React questions",
  priority: "High",
  dueDate: "2026-05-10",
  status: "completed",
  completedDate: "2026-05-09"
}

--> Heatmap Logic :
* Previous 29 days use fixed random activity data
* Current day updates dynamically
* Completed tasks increase current day activity
* Activity count determines color intensity

--> Drag and Drop Logic :
* Tasks are draggable
* Pending → Completed updates task status
* Completed → Pending restores task status
* Heatmap updates automatically when status changes

# Folder Structure :
src
│
├── components
│   ├── AddTask.jsx
│   ├── CompletedTasks.jsx
│   ├── Heatmap.jsx
│   ├── Navbar.jsx
│   ├── PendingTasks.jsx
│   └── TaskCard.jsx
│
├── pages
│   ├── About.jsx
│   ├── Dashboard.jsx
│   ├── HeatmapPage.jsx
│   └── Tasks.jsx
│
├── App.jsx
├── main.jsx
└── index.css

# Developed Using :
* React JS
* JavaScript
* Tailwind CSS
* React Router Dom
* Drag and Drop 