import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, clearData } from "./redux/actions/swapiActions";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleRequest = () => {
    dispatch(fetchData(`https://swapi.dev/api/${url}`));
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <div>
      <div className="container mb-3">
        <h2>SWAPI</h2>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button" onClick={handleRequest} id="button-addon2">
            request
          </button>
        </div>
        <h3 className="mt-3">Result:</h3>
        <div className="border rounded-1 p-2 mb-2">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>No data</p>
          )}
        </div>
        <button className="btn btn-danger" onClick={handleClear}>
          Clean
        </button>
      </div>
    </div>
  );
}

export default App;
