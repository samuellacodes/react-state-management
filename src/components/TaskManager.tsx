import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/themeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = () => {
    if (!task.trim()) {
      return;
    }

    dispatch({
      type: "add",
      payload: task.trim(),
    });

    setTask("");
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <label className={styles.visuallyHidden} htmlFor="new-task">
          New task
        </label>
        <input
          id="new-task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />

        <button type="submit" disabled={!task.trim()}>
          Add Task
        </button>
      </form>

      <ul className={styles.taskList}>
        {tasks.map((currentTask) => (
          <li key={currentTask.id} className={styles.taskItem}>
            <span>{currentTask.text}</span>

            <button
              type="button"
              aria-label={`Remove ${currentTask.text}`}
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: currentTask.id,
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;