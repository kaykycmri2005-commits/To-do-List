import { useRecoilState } from "recoil";
import { filterState } from "../atoms/todoAtom";

export default function Filter() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      <button onClick={() => setFilter("all")}>
        Todas
      </button>

      <button onClick={() => setFilter("completed")}>
        Concluídas
      </button>

      <button onClick={() => setFilter("pending")}>
        Pendentes
      </button>
    </div>
  );
}
