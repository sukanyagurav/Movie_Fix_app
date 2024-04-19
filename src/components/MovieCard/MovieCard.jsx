import React from 'react'
import classes from './MovieCard.module.css'
const MovieCard = ({movie}) => {
  return (
    <article className={classes.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`} alt={movie['original_title']}/>
      <div className={classes.movieCard__content}>
            <h2>{movie['original_title']}</h2>
            <p>{movie['vote_average']}</p>
      </div>
    </article>
  )
}

export default MovieCard
