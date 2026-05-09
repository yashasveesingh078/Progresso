import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import HeatmapPage from "./pages/HeatmapPage";
import About from "./pages/About";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "min-h-screen bg-gray-900" : "min-h-screen bg-gray-100"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setShowModal={setShowModal}/>
      <Routes>
        <Route path="/"
          element={
            <Dashboard tasks={tasks} darkMode={darkMode}/>
          }
        />
        <Route path="/tasks"
          element={
            <Tasks tasks={tasks} setTasks={setTasks} showModal={showModal} setShowModal={setShowModal} draggedTask={draggedTask} setDraggedTask={setDraggedTask} darkMode={darkMode}/>
          }
        />
        <Route path="/heatmap"
          element={
            <HeatmapPage tasks={tasks} darkMode={darkMode}/>
          }
        />
        <Route path="/about"
          element={
            <About darkMode={darkMode} />
          }
        />
      </Routes>
    </div>
  );
};
export default App;