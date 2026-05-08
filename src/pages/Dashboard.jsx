const Dashboard = ({ tasks, darkMode }) => {
  const completedTasks = tasks.filter((task) => task.status === "completed")
  const pendingTasks = tasks.filter((task) => task.status === "pending")
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10">
        <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-4xl font-bold mb-2`}>Dashboard</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>Track your productivity and task progress</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-pink-100 border-gray-200"} rounded-2xl p-6 border`}>
          <h2 className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-lg mb-3`}>Total Tasks</h2>
          <p className={`${darkMode ? "text-white" : "text-gray-900"} text-5xl font-bold`}>{tasks.length}</p>
        </div>
        <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-pink-100 border-gray-200"} rounded-2xl p-6 border`}>
          <h2 className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-lg mb-3`}>Completed Tasks</h2>
          <p className="text-5xl font-bold text-pink-700">{completedTasks.length}</p>
        </div>
        <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-pink-100 border-gray-200"} rounded-2xl p-6 border`}>
          <h2 className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-lg mb-3`}>Pending Tasks</h2>
          <p className="text-5xl font-bold text-pink-300">{pendingTasks.length}</p>
        </div>
      </div>
      <div className="mt-10 bg-gradient-to-r from-slate-500 to-pink-600 rounded-3xl p-10 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Stay Consistent 🚀</h2>
        <p className="text-lg leading-8 text-pink-100">
          Small progress every day leads to big results.
          Consistency is the key to productivity and success.
        </p>
      </div>
    </div>
  );
};
export default Dashboard;