import { useState, useEffect } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
 } from "react-router-dom";
 import {toast} from 'react-toastify';
 import FormSerach from '../../components/SearchForm';
 import Header from '../../components/Header';
 import * as movieApi from '../../services/movies-api';
 import {
  Gallery,
  Card,
  Title,
} from '../Home/Home.styled';

 export default function SearchMovie() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get('query') || ''
  );
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) return;

    movieApi.getMoviesSearch(search)
      .then(response => {
        if (response.results.length === 0) {
          return toast.info('Sorry, there are no more movies matching your search query!!!')
        }
        setMovies(response.results);
      })
  }, [search]);

  const formSubmit = search => {
    navigate(`/movies/?query=${search}`);
    setSearch(search);
    setMovies([]);
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  return (
    <>
      <Header text='SEARCH MOVIES' />
      <FormSerach searchProps={formSubmit} search={search} />
      {movies && (
        // <ul>
        //   {movies.map(movie => (
        //     <NavLink
        //       to={`/movie/${movie.id}`}
        //       state={location}
        //       key={movie.id}
        //     >
        //       <p>{movie.title}</p>
        //     </NavLink>
        //   ))
        //   }
        // </ul>
                <Gallery>
                {movies.map(movie => (
                  <li key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} state={location}>
                      <Card>
                        <img
                          src={`${viewPoster(movie.poster_path)}`}
                          alt={movie.title}
                          width="300"
                          height="450"
                        />
                        <Title>{movie.title}</Title>
                      </Card>
                    </NavLink>
                  </li>
                ))}
              </Gallery>

      )
      }
    </>
  )

 }
