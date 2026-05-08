import React, { useState } from "react";

const AddTask = ({ setShowModal, tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = (e) => {e.preventDefault()

    const newTask = {id: Date.now(),title,description,priority,dueDate,status: "pending",completedDate: null};
    setTasks([...tasks, newTask]);
    setShowModal(false);
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-500px rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Add New Task
          </h1>
          <button onClick={() => setShowModal(false)} className="text-3xl">×</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Task Title</label>
            <input type="text" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none" required/>
          </div>
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none h-28" required/>
          </div>
          <div>
            <label className="block mb-2 font-medium">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none" required/>
          </div>
          <div className="flex gap-4 pt-2">
            <button type="button" onClick={() => setShowModal(false)} className="w-1/2 border border-gray-300 rounded-xl py-3 font-semibold">
              Cancel
            </button>
            <button type="submit" className="w-1/2 bg-rose-400 hover:bg-rose-500 text-white rounded-xl py-3 font-semibold transition">
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;