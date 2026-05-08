import Heatmap from "../components/Heatmap";
const HeatmapPage = ({ tasks, darkMode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10">
        <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-4xl font-bold mb-2`}>Heatmap Analytics</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>Visualize your productivity over the last 30 days</p>
      </div>
      <Heatmap tasks={tasks} darkMode={darkMode} />
      <div className="mt-10 bg-gradient-to-r from-slate-600 to-pink-700 rounded-3xl p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Productivity Insights 📈</h2>
        <p className="text-lg leading-8 text-pink-100">
          The heatmap represents your daily productivity based on completed tasks.
          Darker pink boxes indicate higher productivity, while lighter colors
          represent lower activity levels. Hover over any box to view the exact
          number of tasks completed on that day.
        </p>
      </div>
    </div>
  );
};
export default HeatmapPage;