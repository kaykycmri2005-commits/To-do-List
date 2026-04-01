import { useRecoilValue } from "recoil";
import { filteredTodoList } from "../selectors/todoSelector";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoList);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
