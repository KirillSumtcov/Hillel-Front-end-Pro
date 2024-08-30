import Title from "./components/Title";
import "./App.css";
import Smiles from "./components/Smiles";
// import smile1 from "./assets/1.png";
// import smile2 from "./assets/2.png";
// import smile3 from "./assets/3.png";
// import smile4 from "./assets/4.png";
// import smile5 from "./assets/5.png";

function App() {
  return (
    <>
      <Title title="Голосування за найкращий смайлик" />
      <Smiles/>
    </>
  );
}

export default App;
