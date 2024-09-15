import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";

function App() {
  const counterRedux = useSelector((state) => state.counter.counter);

  return (
    <>
      <div>Counter: {counterRedux}</div>
      <Counter />
      <ToDoList />
    </>
  );
}

export default App;
