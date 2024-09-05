import Menu from "../components/Menu";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  const textColorClass = theme === "dark" ? "bg-dark text-white border-white" : "bg-white text-dark border-dark";
  return (
    <div className={theme === "dark" ? "bg-dark text-primary content-height" : "bg-white text-dark content-height"}>
      <Menu />
      <div className="container mt-4 pb-4">
        <div className={`card  ${textColorClass}`}>
          <div className="card-body">
            <h3 className={`card-title mb-4 ${textColorClass}`}>Про мене</h3>
            <p className={`card-text ${textColorClass}`}>
              Мене звати Кирило. Після майже року роботи HTML-кодувальником я заглибився у сферу веб-технологій, здобувши цінний досвід у створенні структури та
              верстки веб-сторінок.
            </p>
            <p className={`card-text ${textColorClass}`}>
              Постійно навчаючись і розвиваючись, я прагну до наступного етапу своєї кар`єри - посади молодшого фронтенд-розробника. Досконало володіючи HTML та
              CSS, я створюю естетично та функціональні користувацькі інтерфейси, забезпечуючи їхню сумісність з різними браузерами та пристроями. браузерах та
              пристроях. Я підходжу до завдань з упевненістю, використовуючи свої фундаментальні JavaScript, і прагну поглибити свої знання, щоб досягти успіху
              в розробці інтерфейсів.
            </p>
            <p className={`card-text ${textColorClass}`}>
              Керуючись цілями та прагнучи до професіаналізму, я впевнений, що моє прагнення досягти нових висот дозволить мені легко адаптуватися.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
