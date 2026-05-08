import React, { useMemo } from "react";
const Heatmap = ({ tasks }) => {
  const fixedData = useMemo(() => {
    return Array.from(
      { length: 29 },
      () => Math.floor(Math.random() * 10) + 1
    );
  },[]);
  const today = new Date()
    .toISOString()
    .split("T")[0];
  const todayCompletedTasks = tasks.filter((task) =>task.status === "completed" && task.completedDate === today).length;
  const boxes = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const formattedDate = date
      .toISOString()
      .split("T")[0];
    let count;
    if (i === 0) {
      count = todayCompletedTasks;
    }
    else {
      count = fixedData[29 - i];
    }
    let color = "bg-gray-300";
    if (count >= 1 && count <= 3) {
      color = "bg-green-300";
    }
    else if (count >= 4 && count <= 6) {
      color = "bg-green-500";
    }
    else if (count >= 7) {
      color = "bg-green-700";
    }
    boxes.push(
      <div key={formattedDate} className="relative group">
        <div className={`w-8 h-8 rounded-md ${color} cursor-pointer`}></div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
          {count} tasks completed on {formattedDate}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h1 className="text-3xl font-bold mb-6">Productivity Heatmap</h1>
      <div className="flex flex-wrap gap-2">{boxes}</div>
      <div className="flex items-center gap-3 mt-6">
        <p className="text-sm text-gray-500">Less</p>
        <div className="w-4 h-4 rounded bg-gray-300"></div>
        <div className="w-4 h-4 rounded bg-green-300"></div>
        <div className="w-4 h-4 rounded bg-green-500"></div>
        <div className="w-4 h-4 rounded bg-green-700"></div>
        <p className="text-sm text-gray-500">More</p>
      </div>
    </div>
  );
};
export default Heatmap;