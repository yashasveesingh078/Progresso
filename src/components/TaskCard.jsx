const TaskCard = ({ task, setDraggedTask }) => {
  return (
    <div draggable={true} onDragStart={() => setDraggedTask(task.id)} className={`border rounded-2xl p-5 cursor-grab shadow-sm transition ${task.status === "completed" ? "bg-green-100 border-green-300" : "bg-white border-gray-200"}`}>   
      <h2 className={`text-2xl font-bold mb-2 ${task.status === "completed"  ? "line-through text-gray-500" : "text-gray-900"}`}>
        {task.title}
      </h2>
      <p className={`mb-5 ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-600"}`}>
        {task.description}
      </p>
      <div className="flex items-center justify-between">       
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.priority === "High" ? "bg-red-100 text-red-600" : task.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>
          {task.priority}
        </span>      
        <p className={`text-sm ${task.status === "completed" ? "text-gray-400" : "text-gray-500"}`}>
          Due: {task.dueDate}
        </p>
      </div>
    </div>
  );
};
export default TaskCard;