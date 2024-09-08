function ToDoList({ tasks, removeTask }) {
  return (
    <>
      <ul className="container-md list-group list-group-flush">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-danger" onClick={() => removeTask(index)}>
              Видалити
            </button>
          </li>
        ))}
        {/* <button className="btn btn-danger">Видалити</button> */}
      </ul>
    </>
  );
}
export default ToDoList;
