import { useState, useEffect } from "react";
import Count from "./Count";
import smile1 from "../assets/1.png";
import smile2 from "../assets/2.png";
import smile3 from "../assets/3.png";
import smile4 from "../assets/4.png";
import smile5 from "../assets/5.png";

// Функціональний компонент для відображення смайликів та обробки голосування
const Smiles = () => {
  // Ініціалізація стану компонента за допомогою useState
  const [votes, setVotes] = useState([
    { id: 1, clicks: 0, src: smile1, alt: "" },
    { id: 2, clicks: 0, src: smile2, alt: "" },
    { id: 3, clicks: 0, src: smile3, alt: "" },
    { id: 4, clicks: 0, src: smile4, alt: "" },
    { id: 5, clicks: 0, src: smile5, alt: "" },
  ]);
  const [showResult, setShowResult] = useState(false); // Стан для відображення результатів голосування
  const [winner, setWinner] = useState(null); // Стан для збереження смайлика-переможця

  // Виконується при монтуванні компонента для відновлення даних з локального сховища
  useEffect(() => {
    const storedVotes = localStorage.getItem("votes");
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  // Оновлює кількість кліків для смайлика
  const updateClicks = (id) => {
    const updatedVotes = votes.map((vote) => (vote.id === id ? { ...vote, clicks: vote.clicks + 1 } : vote));
    setVotes(updatedVotes);
    localStorage.setItem("votes", JSON.stringify(updatedVotes)); // Зберігає оновлені дані у локальне сховище
  };

  // Показує результати голосування
  const showResults = () => {
    const winner = votes.reduce((max, vote) => (vote.clicks > max.clicks ? vote : max));
    setShowResult(true); // Вмикає відображення результатів
    setWinner(winner); // Встановлює переможця
  };

  // Очищає результати голосування
  const clearResults = () => {
    localStorage.removeItem("votes"); // Видаляє дані з локального сховища
    setVotes(votes.map((vote) => ({ ...vote, clicks: 0 }))); // Скидає кількість кліків
    setShowResult(false); // Вимикає відображення результатів
    setWinner(null); // Очищає переможця
  };

  return (
    <div>
      {votes.map((smile) => (
        <Count key={smile.id} id={smile.id} src={smile.src} alt={smile.alt} clicks={smile.clicks} updateClicks={updateClicks} />
      ))}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={showResults}>Show Results</button>
        <button onClick={clearResults}>Очистити результати</button>
      </div>
      {showResult && winner && (
        <div>
          <h3>Смайлик-переможець:</h3>
          <img src={winner.src} alt={winner.alt} />
          <p>Кількість кліків: {winner.clicks}</p>
        </div>
      )}
    </div>
  );
};

export default Smiles;
