import Menu from "../components/Menu";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Contact() {
    const { theme } = useContext(ThemeContext);
    const textColorClass = theme === "dark" ? "bg-dark text-white border-white" : "bg-white text-dark border-dark";
  return (
    <div className={theme === "dark" ? "bg-dark text-primary content-height" : "bg-white text-dark content-height"}>
      <Menu />
      <div className="container mt-4 pb-4">
        <div className={`card ${textColorClass}`} >
          <div className={`card-body ${textColorClass}`}>
            <h3 className={`card-title ${textColorClass}`}>Контакти</h3>
          </div>
          <ul className="list-group list-group-flush">
            <li className={`list-group-item ${textColorClass}`}>Телефон: +38 (066) 331-84-69</li>
            <li className={`list-group-item ${textColorClass}`}>Email: kirillsumcov14@gmail.com</li>
            <li className={`list-group-item ${textColorClass}`}>Адреса: вул. Шевченка, 1, Дніпро, Україна</li>
          </ul>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/kyrylo-sumtsov/" className="card-link" target="_blank">
              Linkedin
            </a>
            <a href="https://www.instagram.com/sumtsov_kirill/" className="card-link" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
