
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState,useRef } from 'react'
import { fetchFromAPI } from '../utilis/fetchFromAPI'
import { useInView } from 'react-intersection-observer';
import MovieList from "./MovieList";

const Movies = ({selectedCategory}) => {
  const [movies,setMovies] = useState([])
  const [year,setYear] = useState(2012)

  useEffect(()=>{
    fetchFromAPI(selectedCategory).then(data=>{ 
      setMovies(data)})
      setYear(2012)
  },[selectedCategory])

  return (
    <div style={{display:'flex',flexDirection:'column',marginBottom:'3rem',gap:'5rem'}} id="main">
   
   
    <MovieList movies ={movies} year={year} />
  </div>
  )
}

export default Movies
