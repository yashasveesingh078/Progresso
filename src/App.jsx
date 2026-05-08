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
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setShowModal={setShowModal} />
      <Routes>
        <Route path="/"
          element={
            <Dashboard tasks={tasks} />
          }
        />
        <Route path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
              showModal={showModal}
              setShowModal={setShowModal}
              draggedTask={draggedTask}
              setDraggedTask={setDraggedTask}
            />
          }
        />
        <Route path="/heatmap"
          element={
            <HeatmapPage tasks={tasks}/>
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
};
export default App;