// Оголошення класу `Title`, який розширює клас `Component` з React.
// Це дозволяє використовувати методи та функціональність, що надаються React компонентам.
import { Component } from "react";

class Title extends Component {
  // Метод `render` відповідальний за повернення JSX-коду, який визначає, що має бути відображено на екрані.
  render() {
    // Повернення JSX-коду, який визначає структуру компонента.
    return (
      // Використовує проп title, переданий до компонента, для відображення заголовка. this.props.title доступний завдяки переданим властивостям (пропс).
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
// Експорт компонента `Title`, щоб його можна було імплементувати в інших частинах додатку.
export default Title;