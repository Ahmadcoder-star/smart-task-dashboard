import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {

  const [filter, setFilter] = useState("all"); // all, work, study, personal, completed
  const [darkMode, setDarkMode] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
    console.log(savedTasks);
    return savedTasks ? JSON.parse(savedTasks) : []
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.style.background = darkMode ? "#111827" : "#f4f6f8";
    document.getElementsByClassName("container")[0].style.background = darkMode ? "#a2b3c3" : "#fff";
  }, [tasks, darkMode]);

  const addTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
        ? tasks.filter((t) => t.completed)
        : tasks.filter((t) => t.category === filter);

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: newText } : task
      )
    );
  };

  return (
    <div className="container">
      <button style={{ marginBottom: "15px", padding: "6px 12px", cursor: "pointer", }} onClick={() => setDarkMode(!darkMode)} >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={{ marginBottom: "10px" }}>
        <label>Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
}

export default Dashboard;
