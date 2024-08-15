import Button from "./Button";

function Input() {
  const urlApi = "https://swapi.dev/api/";
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          {urlApi}
        </span>
        <input type="text" className="form-control me-1" id="basic-url" placeholder="people/" aria-describedby="basic-addon3" />
        <Button />
      </div>
    </>
  );
}

export default Input;
