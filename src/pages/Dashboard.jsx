const Dashboard = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Track your productivity and task progress
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-gray-500 text-lg mb-3">
            Total Tasks
          </h2>
          <p className="text-5xl font-bold text-gray-900">
            {tasks.length}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-gray-500 text-lg mb-3">
            Completed Tasks
          </h2>
          <p className="text-5xl font-bold text-green-600">
            {completedTasks.length}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-gray-500 text-lg mb-3">
            Pending Tasks
          </h2>
          <p className="text-5xl font-bold text-orange-500">
            {pendingTasks.length}
          </p>
        </div>
      </div>
      <div className="mt-10 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-10 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Stay Consistent 🚀
        </h2>
        <p className="text-lg text-gray-200 leading-8">
          Small progress every day leads to big results.
          Consistency is the key to productivity and success.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;