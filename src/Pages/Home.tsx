import { Link } from "react-router-dom";
import auth from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Home.css";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <main className="main-container">
      <header className="header">
        <h1 className="app-name">CineFind</h1>
      </header>
      <section className="content">
        <article className="intro">
          <h2>Movies on Fire</h2>
          <p>
            🎬 Discover Your Next Favorite Movie with <strong>CineFind</strong>!
            Tired of endless scrolling? CineFind gets your taste and curates
            personalized movie picks just for you. Connect with friends, share
            reviews, and see what’s trending in the movie-loving community.
            Whether you're in the mood for a thriller or a rom-com, our app
            matches movies to your current feels. Stay ahead of the curve with
            notifications on must-watch films. Elevate your movie nights –
            download CineFind today and dive into a world of cinematic
            adventures!
          </p>
        </article>
        <article className="auth-link">
          {loading ? null : !user ? (
            <Link to="/Login" className="auth-button">
              Login
            </Link>
          ) : (
            <Link to="/Movies" className="auth-button">
              Movies
            </Link>
          )}
        </article>
      </section>
      <footer className="footer">
        <p>&copy; 2024 CineFind. All rights reserved.</p>
      </footer>
    </main>
  );
}
