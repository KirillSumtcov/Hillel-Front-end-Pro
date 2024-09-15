import { useDispatch, useStore } from "react-redux";
import { decrease, increase } from "../redux-toolkit/counterSlice";

function Counter() {
  const dispatch = useDispatch();

  const store = useStore();

  return (
    <div>
      <button className="me-2 mt-2"
        onClick={() => {
          dispatch(increase());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -
      </button>
    </div>
  );
}
export default Counter;
