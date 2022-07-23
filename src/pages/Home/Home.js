import { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom';
import Header from "components/Header";
import * as moviesApi from '../../services/movies-api';
import {
  Gallery,
  Card,
  Title,
} from './Home.styled';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.getTrending().then(response => setMovies(response.results));
  }, []);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  return (
    <>
      <Header text='TRENDING TODAY' />
      {movies && (
        <Gallery>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <Card>
                  <img
                    src={`${viewPoster(movie.poster_path)}`}
                    alt={movie.title}
                    width="300"
                    height="450"
                  />
                  <Title>{movie.title}</Title>
                </Card>
              </Link>
            </li>
          ))}
        </Gallery>
      )}
    </>
  )
}
