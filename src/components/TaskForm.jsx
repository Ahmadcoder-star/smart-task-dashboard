import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("work");
    const [priority, setPriority] = useState("medium");
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            alert("Task is required");
            return;
        }

        const taskData = {
            id: Date.now(),
            task,
            category,
            priority,
            completed,
        };

        console.log(taskData);

        // next step: send this data to parent component
        onAddTask(taskData);
        setTask("");
        setCompleted(false);
        setPriority("medium");
        setCategory("work");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>

            <div className="form-group">
                {/* Input */}
                <input type="text" placeholder="Enter task..." value={task} onChange={(e) => setTask(e.target.value)} />

                {/* Dropdown */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="work">Work</option>
                    <option value="study">Study</option>
                    <option value="personal">Personal</option>
                </select>
            </div>

            <div className="form-group" style={{ justifyContent: "space-between" }}>
                {/* Radio Buttons */}
                <div>
                    <label>
                        <input type="radio" value="high" checked={priority === "high"} onChange={(e) => setPriority(e.target.value)} />&nbsp;
                        High &nbsp;&nbsp;
                    </label>

                    <label>
                        <input type="radio" value="medium" checked={priority === "medium"} onChange={(e) => setPriority(e.target.value)} />&nbsp;
                        Medium &nbsp;&nbsp;
                    </label>

                    <label>
                        <input type="radio" value="low" checked={priority === "low"} onChange={(e) => setPriority(e.target.value)} />&nbsp;
                        Low &nbsp;&nbsp;
                    </label>
                </div>

                {/* Checkbox */}
                <label>
                    <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />&nbsp;
                    Mark as completed
                </label>
            </div>

            <br />
            <button>Add Task</button>
        </form>
    );
}

export default TaskForm;