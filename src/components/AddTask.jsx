import React, { useState } from "react";
const AddTask = ({ setShowModal, tasks, setTasks, darkMode }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = (e) => {e.preventDefault()
    const newTask = {id: Date.now(),title,description,priority,dueDate,status: "pending",completedDate: null}
    setTasks([...tasks, newTask])
    setShowModal(false)
    setTitle("")
    setDescription("")
    setPriority("Medium")
    setDueDate("")
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} w-[500px] rounded-2xl p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold`}>
            Add New Task
          </h1>
          <button onClick={() => setShowModal(false)} className={`${darkMode ? "text-white" : "text-black"} text-3xl`}>×</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} block mb-2 font-medium`}>
              Task Title
            </label>
            <input type="text" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} className={`${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black"} w-full border rounded-xl px-4 py-3 outline-none`} required/>
          </div>
          <div>
            <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} block mb-2 font-medium`}>Description</label>
            <textarea placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} className={`${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black"} w-full border rounded-xl px-4 py-3 outline-none h-28`} required/>
          </div>
          <div>
            <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} block mb-2 font-medium`}>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className={`${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"} w-full border rounded-xl px-4 py-3 outline-none`}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className={`${darkMode ? "text-gray-200" : "text-gray-700"} block mb-2 font-medium`}>Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={`${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"} w-full border rounded-xl px-4 py-3 outline-none`} required/>
          </div>
          <div className="flex gap-4 pt-2">
            <button type="button" onClick={() => setShowModal(false)} className={`${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} w-1/2 border rounded-xl py-3 font-semibold`}>
              Cancel
            </button>
            <button type="submit" className="w-1/2 bg-gradient-to-r bg-rose-400 hover:bg-rose-500 text-white rounded-xl py-3 font-semibold transition">
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;