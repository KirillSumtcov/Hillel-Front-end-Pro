import { Component } from "react";
import Count from "./Count";
import smile1 from "../assets/1.png";
import smile2 from "../assets/2.png";
import smile3 from "../assets/3.png";
import smile4 from "../assets/4.png";
import smile5 from "../assets/5.png";

class Smiles extends Component {
  // Конструктор класу для ініціалізації стану компонента.
  constructor(props) {
    super(props);
    // Ініціалізація стану компонента.
    this.state = {
      // Массив об'єктів, кожен з яких представляє смайлик з ідентифікатором, кількістю кліків, шляхом до зображення та альтернативним текстом.
      votes: [
        { id: 1, clicks: 0, src: smile1, alt: "" },
        { id: 2, clicks: 0, src: smile2, alt: "" },
        { id: 3, clicks: 0, src: smile3, alt: "" },
        { id: 4, clicks: 0, src: smile4, alt: "" },
        { id: 5, clicks: 0, src: smile5, alt: "" },
      ],
      showResult: false, // Прапор для відображення результатів голосування.
      winner: null, // Об'єкт переможця голосування.
    };
  }

  // Метод для відновлення даних з локального сховища при монтуванні компонента.
  componentDidMount() {
    const storedVotes = localStorage.getItem("votes");
    if (storedVotes) {
      this.setState({ votes: JSON.parse(storedVotes) });
    }
  }

  // Метод для оновлення кількості кліків на смайлик.
  updateClicks = (id) => {
    this.setState((prevState) => {
      const updatedVotes = prevState.votes.map((vote) => (vote.id === id ? { ...vote, clicks: vote.clicks + 1 } : vote));
      localStorage.setItem("votes", JSON.stringify(updatedVotes));
      return { votes: updatedVotes };
    });
  };

  // Метод для відображення результатів голосування.
  showResults = () => {
    // Знаходження смайлика з найбільшою кількістю кліків.
    const winner = this.state.votes.reduce((max, vote) => (vote.clicks > max.clicks ? vote : max));
    this.setState({ showResult: true, winner });
  };

  // Метод для очищення результатів голосування.
  clearResults = () => {
    localStorage.removeItem("votes");
    this.setState({
      votes: this.state.votes.map((vote) => ({ ...vote, clicks: 0 })),
      showResult: false,
      winner: null,
    });
  };

  // Метод рендерингу JSX для відображення компонента.
  render() {
    return (
      <div>
        {this.state.votes.map((smile) => (
          <Count key={smile.id} id={smile.id} src={smile.src} alt={smile.alt} clicks={smile.clicks} updateClicks={this.updateClicks} />
        ))}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          <button onClick={this.showResults}>Show Results</button>
          <button onClick={this.clearResults}>Очистити результати</button>
        </div>
        {this.state.showResult && this.state.winner && (
          <div>
            <h3>Смайлик-переможець:</h3>
            <img src={this.state.winner.src} alt={this.state.winner.alt} />
            <p>Кількість кліків: {this.state.winner.clicks}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Smiles;
