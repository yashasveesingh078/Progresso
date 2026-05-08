const TaskCard = ({ task, setDraggedTask, darkMode }) => {
  return (
    <div draggable={true} onDragStart={() => setDraggedTask(task.id)} className={`border rounded-2xl p-5 cursor-grab shadow-sm transition 
        ${task.status === "completed" ? "bg-pink-200 border-1 border-pink-500" : darkMode ? "bg-gray-700 border-1 border-gray-600": "bg-pink-50 border-1 border-pink-400"}`}>
      <h2 className={`text-2xl font-bold mb-2 
          ${task.status === "completed" ? "line-through text-gray-900" : darkMode ? "text-white" : "text-gray-900"}`}>
        {task.title}
      </h2>
      <p className={`mb-5 ${task.status === "completed" ? "line-through text-gray-700" : darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {task.description}
      </p>
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.priority === "High" ? "bg-red-100 text-red-600" : task.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>
          {task.priority}
        </span>
        <p className={`text-sm ${task.status === "completed" ? "text-gray-700" : darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Due: {task.dueDate}
        </p>
      </div>
    </div>
  );
};
export default TaskCard;