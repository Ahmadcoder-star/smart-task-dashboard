import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";

function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, []);

  return (
    <div className="container">
      <h3>Completed Tasks</h3>
      <TaskList tasks={completedTasks} />
    </div>
  );
}

export default CompletedTasks;