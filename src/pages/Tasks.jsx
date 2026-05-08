import AddTask from "../components/AddTask";
import PendingTasks from "../components/PendingTasks";
import CompletedTasks from "../components/CompletedTasks";
const Tasks = ({tasks,setTasks,showModal,setShowModal,draggedTask,setDraggedTask,darkMode}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {
        showModal && (<AddTask setShowModal={setShowModal} tasks={tasks} setTasks={setTasks} darkMode={darkMode}/>)
      }
      <div className="mb-10">
        <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-4xl font-bold mb-2`}>Task Manager</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>Drag and drop tasks between pending and completed sections</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PendingTasks tasks={tasks} setTasks={setTasks} draggedTask={draggedTask} setDraggedTask={setDraggedTask} darkMode={darkMode}/>
        <CompletedTasks tasks={tasks} setTasks={setTasks} draggedTask={draggedTask} setDraggedTask={setDraggedTask} darkMode={darkMode}/>
      </div>
      <button onClick={() => setShowModal(true)} className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-slate-500 to-pink-600 text-white text-4xl flex items-center justify-center shadow-lg">
        +
      </button>
    </div>
  );
};
export default Tasks;