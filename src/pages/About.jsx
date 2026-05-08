const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          About Progresso
        </h1>
        <p className="text-lg text-gray-600 leading-8">
          Progresso is a productivity tracking web application designed
          to help users manage tasks and visualize consistency through
          an interactive heatmap system.
        </p>
      </div>
      <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Project Overview 🚀
        </h2>
        <p className="text-gray-600 leading-8 mb-6">
          This project combines a Kanban-style task management system
          with a GitHub-inspired heatmap visualization. Users can create,
          manage, and complete tasks while tracking their daily productivity.
        </p>
        <p className="text-gray-600 leading-8 mb-6">
          The heatmap dynamically updates based on completed tasks,
          helping users visualize their progress and maintain consistency.
        </p>
        <p className="text-gray-600 leading-8">
          The project is built using React, JavaScript, Tailwind CSS,
          React Router, and Drag-and-Drop functionality.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Features ✨</h2>
          <ul className="space-y-3 text-lg">
            <li>• Task Management</li>
            <li>• Drag and Drop</li>
            <li>• Productivity Heatmap</li>
            <li>• Dynamic Activity Tracking</li>
            <li>• Responsive UI</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Technologies 💻</h2>
          <ul className="space-y-3 text-lg">
            <li>• React JS</li>
            <li>• JavaScript</li>
            <li>• Tailwind CSS</li>
            <li>• React Router DOM</li>
            <li>• HTML Drag & Drop API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;