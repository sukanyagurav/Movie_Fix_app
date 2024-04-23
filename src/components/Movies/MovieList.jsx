import React from 'react'
import classes from './Movies.module.css'

import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies,year,categories}) => {

  
    return (
    <div className={classes.main_container} style={{marginBottom:'4rem',width:'100%',height:'100%',minHeight:'500px',scrollbarWidth:'none'}}  >
    <h2 className={classes.title}>{year} Movies</h2>
    {movies.length == 0 && <h2 style={{textAlign:'center'}} >No movies found! </h2>}
    <div className={classes.container}>
      {movies.map(movie=>(
        <MovieCard movie={movie} categories={categories}/>
      ))}
    </div>

  </div>
  )
}

export default MovieList
