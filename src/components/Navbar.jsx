import { Link } from "react-router-dom";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-slate-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">P</div>
          <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-2xl font-bold`}>
            Progresso
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className={`${darkMode ? "text-gray-300" : "text-gray-700"} hover:text-pink-500 transition`}>
            Dashboard
          </Link>
          <Link to="/tasks" className={`${darkMode ? "text-gray-300" : "text-gray-700"} hover:text-pink-500 transition`}>
            Tasks
          </Link>
          <Link to="/heatmap" className={`${darkMode ? "text-gray-300" : "text-gray-700"} hover:text-pink-500 transition`}>
            Heatmap
          </Link>
          <Link to="/about" className={`${darkMode ? "text-gray-300" : "text-gray-700"} hover:text-pink-500 transition`}>
            About
          </Link>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-gradient-to-r from-slate-500 to-pink-600 text-white px-4 py-2 rounded-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;