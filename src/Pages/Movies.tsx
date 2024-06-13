import { collection, query } from "firebase/firestore";
import store from "../firebase/store";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./Movies.css";

type Movie = {
  title: string;
  year: number;
  director: string;
  main_actor: string;
  description: string;
};
const movieCollection = collection(store, "movies");
const movieQuery = query(movieCollection);

function userMoviesCollection() {
  const [values, loading] = useCollectionData(movieQuery);
  return [values as Movie[], loading] as const;
}

export default function Movies() {
  const [values, loading] = userMoviesCollection();

  if (loading) {
    return <div className="loading" />;
  }

  return (
    <div className="movies-page">
      <main>
        <header>
          <h1>Movies</h1>
        </header>
        <section>
          {values?.map((movie, index) => (
            <article key={index}>
              <header>
                <h2>{movie.title}</h2>
              </header>
              <p>{movie.description}</p>
              <p></p>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Main Actor</th>
                    <th>Director</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.main_actor}</td>
                    <td>{movie.director}</td>
                  </tr>
                </tbody>
              </table>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
