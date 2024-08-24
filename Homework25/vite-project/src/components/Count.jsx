import { Component } from "react";

class Count extends Component {
  // Метод для обробки кліку на зображення.
  handleClick = () => {
    // Виклик функції `updateClicks`, переданої через пропси, з ідентифікатором смайлика.
    this.props.updateClicks(this.props.id);
  };

  render() {
    // Деструктуризація пропсів для легшого доступу.
    const { src, alt, clicks } = this.props;
    return (
      <>
        <img src={src} alt={alt} onClick={this.handleClick} />
        <span>{clicks}</span>
      </>
    );
  }
}

export default Count;
