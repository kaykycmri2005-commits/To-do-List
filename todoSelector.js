import { selector } from "recoil";
import { todoListState, filterState } from "../atoms/todoAtom";

export const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
});
