import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Title />
      <Input />
      <div className="container border p-3 overflow-auto">
        <Result />
      </div>
    </>
  );
}

export default App;
