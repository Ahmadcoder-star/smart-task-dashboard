import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggleComplete, onEdit }) {
  if (tasks.length === 0) {
    return <p className="no-tasks" >No tasks added yet.</p>;
  }

  return (
    <div className="task-list">
      <h3>Task List</h3>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;