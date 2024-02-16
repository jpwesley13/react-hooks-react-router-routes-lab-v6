import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(setDirectors)
  }, [])

  const directorList = directors.map(director => (
    
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
    </article>
  )) //This is the exact same structure as Actors, so it probably could be its own component that the two of them use.


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
