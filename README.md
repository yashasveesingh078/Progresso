# <-------- Progresso ---------> #

# Project Overview :
Progresso is a React-based web application designed to track and visualize user productivity through an interactive heatmap driven by task completion. Instead of manually logging activity, the system automatically updates daily activity based on completed tasks.

The project is inspired by GitHub’s contribution graph and extends it by integrating a Kanban-style task management system. This allows users to manage daily tasks while simultaneously visualizing their consistency and progress over time.

# Objectives :

* To track daily productivity through task completion
* To represent activity using color intensity (heatmap visualization)
* To help users analyze consistency, streaks, and performance trends
* To integrate task management with visual progress tracking
* To demonstrate core concepts of JavaScript, React, and Tailwind CSS

# Features :

--> Heatmap Visualization:
* Displays activity data for the last 30 days
* Each day is represented as a square in a grid
* Color intensity reflects number of tasks completed on that day

--> Task Management System (Kanban Board):
* Users can create tasks for daily activities
* Tasks are organized into columns such as Pending and Completed
* Tasks can be moved between columns using interaction controls

--> Activity Tracking Integration:
* Completing a task automatically updates the activity count for that day
* Moving a task back reduces the activity count accordingly
* Eliminates the need for manual activity input

--> Dynamic Color Coding:
* Light color → low or no activity
* Medium color → moderate activity
* Dark color → high activity
* Colors update dynamically based on completed tasks

--> Streak Calculation:
* Calculates current streak based on consecutive active days
* Calculates longest streak
* Encourages consistent performance

--> Statistics Dashboard:
* Total completed tasks
* Average daily activity
* Current and maximum streak

--> Data Persistence:
* Uses browser localStorage to store user data
* Data remains available after page refresh

--> Interactive UI:
* Task cards and structured columns for task management
* Clickable controls for moving tasks
* Hover tooltips displaying date and activity
* Clean and responsive layout using Tailwind CSS

# Tech Stack :

--> React:
* Functional components
* useState for managing tasks and activity data
* useEffect for syncing data with localStorage
* Component-based architecture

--> JavaScript:
* Date manipulation (generating last 30 days)
* Conditional logic for color mapping
* Array methods for task filtering and updates
* Streak and statistical calculations

--> Tailwind CSS:
* Grid-based layout for heatmap
* Flex-based layout for Kanban board
* Utility-first styling approach
* Responsive and modern UI design

# Core Logic

* Generate last 30 days dynamically using JavaScript Date
* Store tasks and activity data in structured format -->

Tasks:
{
id: 1,
title: "Task Example",
status: "completed",
date: "2026-04-28"
}

Activity:
{
"2026-04-28": 3
}

* Update activity automatically when a task is marked as completed
* Map activity values to different color intensities
* Calculate streaks using consecutive date comparison


