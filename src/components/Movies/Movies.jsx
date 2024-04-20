
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState,useRef,useCallback } from 'react'
import { fetchFromAPI } from '../utilis/fetchFromAPI'
import MovieList from "./MovieList";


import axios from 'axios';

const Movies = ({selectedCategory,year,setYear}) => {
  const [movies,setMovies] = useState([])

  function initialFunction(){
    setMovies([])
    fetchFromAPI(selectedCategory,year).then(data=>{ 
      setMovies([{year:year,movie:data}])})

  }
  useEffect(()=>{
      initialFunction()
  },[selectedCategory])

 const fetchData =async () => {

   setYear(prevYear=>{
    return prevYear + 1
  })

  const  {data:{results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`)
  
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
  const uniqueIds = [];
  return (
    <div  style={{display:'flex',flexDirection:'column',marginBottom:'3rem',gap:'5rem'}} id="main">

   
    <InfiniteScroll
      dataLength={ movies?.length }

      next={fetchData}
      hasMore={year <= new Date().getFullYear()}
    >
  <div >
  {
      movies.filter(element => {
       const isDuplicate = uniqueIds.includes(element.year);
       if (!isDuplicate) {
         uniqueIds.push(element.year);
         return true;
       }
       return false;
     }).map((movie, index) => {
 
 return <MovieList  movies ={movie.movie} year={movie.year} key={movie.year}/>
    
   })} 
  </div>

    </InfiniteScroll>
    <div>
     
    </div>

  </div>
  )
}

export default Movies
