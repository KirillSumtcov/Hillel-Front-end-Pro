// Функціональний компонент для відображення окремого смайлика з можливістю кліку
const Count = ({ id, src, alt, clicks, updateClicks }) => {
  // Обробник кліку на смайлик
  const handleClick = () => {
    updateClicks(id); // Викликає функцію оновлення кліків з батьківського компонента
  };

  return (
    <>
      <img src={src} alt={alt} onClick={handleClick} />
      <span>{clicks}</span>
    </>
  );
};
export default Count;
