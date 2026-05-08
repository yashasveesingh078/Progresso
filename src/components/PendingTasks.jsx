import TaskCard from "./TaskCard";
const PendingTasks = ({tasks,setTasks,draggedTask,setDraggedTask}) => {  
  const pendingTasks = tasks.filter((task) => task.status === "pending") 
  const handleDrop = () => {
    setTasks(
      tasks.map((task) =>task.id === draggedTask ? {...task,status: "pending",completedDate: null} : task)
    )
  }
  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className="bg-gray-200 rounded-2xl p-6 min-h-[500px]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Pending Tasks</h1>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
           {pendingTasks.length}
        </span>
      </div>      
      <div className="space-y-4">
        {
        pendingTasks.length > 0 ? 
          (pendingTasks.map((task) => (<TaskCard key={task.id} task={task} setDraggedTask={setDraggedTask}/>))) 
          :
          (<div className="bg-white rounded-2xl p-8 text-center text-gray-500 border border-dashed border-gray-300">Drag pending tasks here</div>)
        }
      </div>
    </div>
  );
};
export default PendingTasks;