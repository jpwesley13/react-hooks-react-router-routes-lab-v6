import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(setActors)
    .catch(error => console.error(error))
  }, [])

  const actorList = actors.map(actor => (
    
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
    </article>
  )) //This is the exact same structure as Directors, so it probably could be its own component that the two of them use.

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
