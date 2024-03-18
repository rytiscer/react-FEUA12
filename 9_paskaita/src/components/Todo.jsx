import { useState } from "react";
import styles from "./Todo.module.css";

export const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((prevValue) => [...prevValue, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.main}>
      <h2>You have {todos.length} todos</h2>
      <div className={styles.list}>
        <ul>
          {todos.map((todo, index) => (
            <li className={styles.list} key={index}>
              {todo}
              <button
                className={styles.deleteButton}
                onClick={() => deleteTodo(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.input}
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Enter item"
          />
          <button
            className={styles.button}
            type="submit"
            onClick={() => alert("The following item added:" + task)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
