import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
// import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { ImArrowLeft } from 'react-icons/im';
import Header from "components/Header";
import Batton from "components/Batton";
import * as movieApi from '../../services/movies-api';
import {
  MovieCard,
  MovieInfo,
  MovieLink,
  MovieH2,
  MovieH3,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const {movieId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    movieApi.getMovieId(movieId)
      .then(response => setMovie(response));
  }, [movieId]);

  const movieScore = score => {
    return score * 10 + '%';
  };

  const movieGanres = genres => {
    if (genres === null) return;
    return genres.map(genre => genre.name).join(', ');
  };

  const onBtnClick = () => {
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <>
      {movie && (
        <>
          <Batton
            onClick={onBtnClick}
            label={'GO BACK'}
            arrow={<ImArrowLeft size='30' fill='#7bd4eb'/>}
          />
          <Header text={`${movie.title}`} />
          <MovieCard>
            <img
              src={`${viewPoster(movie.poster_path)}`}
              alt={movie.title}
              width='320'
            />
            <MovieInfo>
              <MovieH2>{movie.title}</MovieH2>
              <p> User Score: {`${movieScore(movie.vote_average)}`} </p>
              <MovieH3>Overview</MovieH3>
              <p>{movie.overview}</p>
              <MovieH3>Genres</MovieH3>
              <p>{`${movieGanres(movie.genres)}`}</p>
            </MovieInfo>
          </MovieCard>
          <Header text='Additional information' />
          <MovieLink to={`/movies/${movie.id}/cast`} state={location.state}>
            Cast
          </MovieLink>
          <MovieLink to={`/movies/${movie.id}/reviews`} state={location.state}>
            Reviews
          </MovieLink>
          <Outlet />
        </>
      )}
    </>
  )
}
