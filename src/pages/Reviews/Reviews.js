import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from '../../services/movies-api';
import {
  ReviewsGallery,
  ReviewsCard,
  ReviewsName,
  ReviewsP,
  ReviewsSpan,
} from './Reviews.styled';
import Header from '../../components/Header/Header';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    moviesApi.getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0
      ? (<ReviewsGallery>
          {reviews.map(({id, author, content}) => (
            <ReviewsCard key={id}>
                <ReviewsName>
                  Autor : <ReviewsSpan>{author}</ReviewsSpan>
                </ReviewsName>
                <ReviewsP>{content}</ReviewsP>
            </ReviewsCard>
          ))}
          </ReviewsGallery>
      ) : (
        <ReviewsName>
          <Header text='We don’t have any reviews for this movie'  />
        </ReviewsName>

      )
      }
    </>
  )
}
