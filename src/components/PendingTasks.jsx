import TaskCard from "./TaskCard";
const PendingTasks = ({tasks,setTasks,draggedTask,setDraggedTask,darkMode}) => {
  const pendingTasks = tasks.filter((task) => task.status === "pending")
  const handleDrop = () => {
    setTasks(
      tasks.map((task) => task.id === draggedTask ? 
            {...task,status: "pending",completedDate: null} : task)
    )
  }
  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-2xl p-6 min-h-[500px]`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-3xl font-bold`}>Pending Tasks</h1>
        <span className="bg-pink-300 text-white px-4 py-2 rounded-full text-sm font-semibold">{pendingTasks.length}</span>
      </div>
      <div className="space-y-4">
        {
          pendingTasks.length > 0 ? 
            (pendingTasks.map((task) => (<TaskCard key={task.id} task={task} setDraggedTask={setDraggedTask}/>))) 
            : 
            (<div className={`${darkMode ? "bg-gray-700 text-gray-300 border-gray-600" : "bg-white text-gray-500 border-gray-300"} rounded-2xl p-8 text-center border border-dashed`}>Drag pending tasks here</div>)
        }
      </div>
    </div>
  );
};
export default PendingTasks;