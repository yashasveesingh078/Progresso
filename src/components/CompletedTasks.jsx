import TaskCard from "./TaskCard";
const CompletedTasks = ({tasks,setTasks,draggedTask,setDraggedTask}) => {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const handleDrop = () => {
    const today = new Date()
      .toISOString()
      .split("T")[0];
    setTasks(
      tasks.map((task) =>
        task.id === draggedTask
          ? {
              ...task,
              status: "completed",
              completedDate: today,
            }
          : task
      )
    );
  };
  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className="bg-gray-200 rounded-2xl p-6 min-h-500px">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Completed Tasks</h1>
        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">{completedTasks.length}</span>
      </div>
      <div className="space-y-4">
        {
        completedTasks.length > 0 ? 
        (completedTasks.map((task) => (<TaskCard key={task.id} task={task} setDraggedTask={setDraggedTask}/>))) 
        :
        (<div className="bg-white rounded-2xl p-8 text-center text-gray-500 border border-dashed border-gray-300">Drag completed tasks here</div>)
        }
      </div>
    </div>
  );
};
export default CompletedTasks;