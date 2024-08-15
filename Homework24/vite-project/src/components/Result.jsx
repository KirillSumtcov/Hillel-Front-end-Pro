function Result() {
  const getApi = {
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    films: "https://swapi.dev/api/films/",
    species: "https://swapi.dev/api/species/",
    vehicles: "https://swapi.dev/api/vehicles/",
    starships: "https://swapi.dev/api/starships/",
  };
  let resultApi = JSON.stringify(getApi, null, 5);

  return (
    <div className="card">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Api
          </li>
        </ol>
      </nav>
      <pre className="text-start">{resultApi}</pre>
    </div>
  );
}
export default Result;
