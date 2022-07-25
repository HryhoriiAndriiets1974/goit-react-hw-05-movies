import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from '../../services/movies-api';
import {
  CastGallery,
  CastCard,
  CastName,
  CastP,
  CastSpan,
} from './Cast.styled';

export default function Cast() {
  const [casts, setCasts] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    moviesApi.getCast(movieId)
    .then(response => setCasts(response.cast));
  }, [movieId]);

  const viewPoster = profile_path => {
    if (profile_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };

  return (
    <>
      {casts && (
        <CastGallery>
          {casts.map(({id, profile_path, name, character}) => (
            <CastCard key={id}>
              <img
                src={`${viewPoster(profile_path) }`}
                alt={name}
                width='300'
              />
              <CastName>{name}</CastName>
              <CastP>
                {' '}
                Character : <CastSpan>
                  {' '}
                  {character}{' '}
                </CastSpan>{' '}
              </CastP>
            </CastCard>
          ))}
        </CastGallery>
      )
      }
    </>
  )
}
