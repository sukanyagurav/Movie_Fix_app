import { useState,useEffect } from 'react';
import { fetchFromAPI } from '../utilis/fetchFromAPI';

export default function useInfiniteLoading(year,selectedCategory) {
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [movies,setMovies] = useState([])
  const [hasMore,setHasMore] = useState(false)
  useEffect(()=>{
    fetchFromAPI(selectedCategory).then(data=>{ 
      setMovies({year:2012,movie:data})})
  },[selectedCategory])
  useEffect(()=>{
    setLoading(true)
    setError(false)
    fetchFromAPI(year).then(data=>{
      
      setMovies(prevData=> [...prevData ,{movie:data,year:year}])
      
      setHasMore(year > new Date().getFullYear())
      setLoading(false)
    })
  },[year])
  
  
  
  return {
    loading,
    error,
    movies,
    hasMore
  } 
}