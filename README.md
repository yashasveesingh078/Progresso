<-------- Progresso --------->

# Project Overview

Progresso is a React-based web application designed to track and visualize user activity over time using a heatmap. Each day is represented as a small square, and the color intensity of the square reflects the level of activity performed on that day.

The project is inspired by GitHub’s contribution graph and focuses on transforming simple daily data into meaningful visual insights about consistency and progress.


# Objectives

* To track daily activity in a structured and visual format
* To represent data using color intensity (heatmap visualization)
* To help users analyze consistency, streaks, and performance trends
* To demonstrate core concepts of JavaScript, React, and Tailwind CSS

# Features

--> Heatmap Visualization

* Displays activity data for the last 30 days
* Each day is represented as a square in a grid
* Color intensity reflects activity level


--> Daily Activity Tracking

* Users can click on any day to update activity count
* Each click increments the value for that day


--> Dynamic Color Coding

* Light color → low or no activity
* Medium color → moderate activity
* Dark color → high activity
* Colors update dynamically based on activity values


--> Streak Calculation

* Calculates current streak (consecutive active days)
* Calculates longest streak
* Encourages consistent performance


--> Statistics Dashboard

* Total active days
* Average activity
* Current and maximum streak


--> Data Persistence

* Uses browser localStorage to store user data
* Data remains available after page refresh


--> Interactive UI

* Clickable day boxes
* Hover tooltips displaying date and activity
* Clean and responsive layout using Tailwind CSS


#Tech Stack

--> React

* Functional components
* useState for managing activity data
* useEffect for syncing data with localStorage
* Component-based architecture


--> JavaScript

* Date manipulation (generating last 30 days)
* Conditional logic for color mapping
* Iteration using loops and array methods
* Streak and statistical calculations


--> Tailwind CSS

* Grid-based layout for heatmap
* Utility-first styling approach
* Responsive and modern UI design
* Dynamic color classes


# Core Logic

* Generate last 30 days dynamically using JavaScript Date
* Store activity data in key-value format:

  ```
  {
    "2026-04-01": 2,
    "2026-04-02": 0
  }
  ```
* Map activity values to different color intensities
* Calculate streaks using consecutive date comparison


# Future Enhancements

* Support for multiple activity types
* Monthly and yearly heatmap views
* User authentication and cloud storage
* Export data as reports



