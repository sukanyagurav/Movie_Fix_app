
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utilis/fetchFromAPI'
import MovieList from "./MovieList";
import loadingSrc from '../../assets/Spinner@1.25x-1.0s-200px-200px (1).svg'

import axios from 'axios';

const Movies = ({selectedCategory,year,setYear}) => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const uniqueIds = [];
  function initialFunction(){

    setMovies([])
    setLoading(true)
    fetchFromAPI(selectedCategory,year).then(data=>{ 
      setMovies([{year:year,movie:data}])})
    setLoading(false)
  }
  useEffect(()=>{
      initialFunction()
  },[selectedCategory])

 const fetchData =async () => {

   setYear(prevYear=>{
    return prevYear + 1
  })

  const  {data:{results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`)
  
  if(selectedCategory === 1 ){
   
        setMovies(currentState=>{ 
        return  (currentState).concat({year:year,movie:results})
   });
  
  }else{
      let tempMovie=[]
      for(let i=0;i<results.length;i++){
            if(results[i]['genre_ids'].includes(selectedCategory)){
                tempMovie.push(results[i])
            }
       }
      setMovies(currentState=>{ 
        return (currentState).concat({year:year,movie: tempMovie})
       
  });
  
  }

  };

  return (
    <div  style={{display:'flex',flexDirection:'column',marginBottom:'3rem',gap:'5rem'}} id="main">
    <InfiniteScroll
      dataLength={ movies?.length }
      loader={<img src={loadingSrc} style={{marginInline: 'auto',display: 'block'}}/>}
      next={fetchData}
      hasMore={year <= new Date().getFullYear()}
    >
  <div>
  {
      movies.filter(element => {
       const isDuplicate = uniqueIds.includes(element.year);
       if (!isDuplicate) {
         uniqueIds.push(element.year);
         return true;
       }
       return false;
     }).map((movie, index) => <MovieList  movies ={movie.movie} year={movie.year} key={movie.year}/>)} 
  </div>

    </InfiniteScroll>
    <div>
     
    </div>

  </div>
  )
}

export default Movies
