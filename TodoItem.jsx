import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleTodo = () => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  const removeTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li>
      <span
        onClick={toggleTodo}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>❌</button>
    </li>
  );
}
