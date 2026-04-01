import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div>
      <h1>To-do List com Recoil</h1>
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  );
}
