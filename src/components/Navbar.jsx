import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">     
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Progresso
          </h1>
        </div>        
        <div className="flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-rose-500 transition">
            Dashboard
          </Link>
          <Link to="/tasks" className="font-medium text-gray-700 hover:text-rose-500 transition">
            Tasks
          </Link>
          <Link to="/heatmap" className="font-medium text-gray-700 hover:text-rose-500 transition">
            Heatmap
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-rose-500 transition">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;