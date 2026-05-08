import AddTask from "../components/AddTask";
import PendingTasks from "../components/PendingTasks";
import CompletedTasks from "../components/CompletedTasks";
const Tasks = ({tasks,setTasks,showModal,setShowModal,draggedTask,setDraggedTask}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {showModal && (
          <AddTask setShowModal={setShowModal} tasks={tasks} setTasks={setTasks}/>
        )
      }
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Task Manager</h1>
        <p className="text-gray-600 text-lg">Drag and drop tasks between pending and completed sections</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PendingTasks tasks={tasks} setTasks={setTasks} draggedTask={draggedTask} setDraggedTask={setDraggedTask}/>
        <CompletedTasks tasks={tasks} setTasks={setTasks} draggedTask={draggedTask} setDraggedTask={setDraggedTask}/>
      </div>
      <button onClick={() => setShowModal(true)} className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-black text-white text-4xl flex items-center justify-center shadow-lg hover:bg-gray-800 transition duration-300">
        +
      </button>
    </div>
  );
};

export default Tasks;