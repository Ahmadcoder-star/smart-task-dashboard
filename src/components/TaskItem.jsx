import { useState, useRef, useEffect } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import styles from "../assets/styles/taskItem.module.css";

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.task);
  const inputRef = useRef(null);

  // Auto focus when edit mode ON
  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  const saveEdit = () => {
    if (editText.trim() === "") return;
    onEdit(task.id, editText);
    setIsEditing(false);
    alert("Task updated successfully!");
  };

  return (
    <div className={`${styles.card} ${task.completed ? styles.completed : ""}`}>
      <div>
        {isEditing ? (
          <input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <>
            <h4>{task.task}</h4>
            <span className={styles.badge}>{task.category}</span>
            <span className={styles.badge}>{task.priority}</span>
          </>
        )}
      </div>

      <div className={styles.actions}>
        {!isEditing ? (
          <>
            <button
              style={{
                marginRight: "6px",
                transition: "all 0.3s ease-in-out",
                background: task.completed ? "#059669" : "#f59e0b",
                color: task.completed ? "#fff" : "#000"
              }}
              onClick={() => onToggleComplete(task.id)}
            >
              {task.completed ? "Completed" : "InProgress"}
            </button>

            <button style={{marginRight: "6px"}} onClick={() => setIsEditing(true)}>
              <FaEdit />
            </button>

            <button
              className={styles.deleteBtn}
              onClick={() => onDelete(task.id)}
            >
              <FaTrash />
            </button>
          </>
        ) : (
          <>
            <button style={{marginRight: "6px"}} onClick={saveEdit}>
              <FaSave />
            </button>
            <button onClick={() => setIsEditing(false)}>
              <FaTimes />
            </button>
            
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;