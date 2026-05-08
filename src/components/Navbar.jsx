import React from "react";
const Navbar = ({ setShowModal }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Progresso
          </h1>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
        >
          + Add Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;