import React from 'react'
import classes from './Movies.module.css'

import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies,year}) => {

    return (
    <div className={classes.main_container} style={{marginBottom:'4rem',width:'100%',height:'100%',minHeight:'500px'}}  >
    <h2>{year} Movies</h2>
    {movies.length == 0 && <h2 >No movies found! </h2>}
    <div className={classes.container}>
      { movies.map(movie=>(
        <MovieCard movie={movie}/>
      ))}
    </div>

  </div>
  )
}

export default MovieList
