import React, { useState,useEffect } from 'react'
import classes from './SearchFeed.module.css';
import { useParams } from 'react-router';
import { fetchSearchMovies } from '../utilis/fetchFromAPI';
import MovieCard from '../MovieCard/MovieCard';
import loadingSrc from '../../assets/Spinner@1.25x-1.0s-200px-200px (1).svg'
const Search = () => {
  const {searchTerm} = useParams()
  const [loading,setLoading] = useState(false)
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    setLoading(true)
    fetchSearchMovies(searchTerm).then(data=>
      {  setMovies(data)
        setLoading(false)
      })
   
  },[searchTerm])
  return (
    <div className={classes.container}>
      <h4><span className={classes.searchTerm}>{searchTerm}</span> results</h4>
      <div className={classes.resultsContainer}>

        {loading && <img src={loadingSrc}/>}
        {!loading && movies.length === 0 && <p>No movies found</p>}
        {!loading && movies.length !== 0 && movies.map(movie=>{
        return   <MovieCard movie={movie} key={movie.id}/>
        })}
      </div>
      
    
    </div>
  )
}

export default Search
