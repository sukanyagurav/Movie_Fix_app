
import Sidebar from '../Sidebar/Sidebar'
import Movies from '../Movies/Movies'
import classes from './Feed.module.css'
import { fetchGenres } from '../utilis/fetchFromAPI'

import React, { useEffect, useState } from 'react'


const Feed = () => {
    const [selectedCategory,setSelectedCategory] = useState(1)
    const [year,setYear] = useState(2012)
    const [categories,setCategories] = useState([ {
      "id": 1,
      "name": "All"
  }])
    useEffect(()=>{
      fetchGenres('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=2dca580c2a14b55200e784d157207b4d').then((data)=>{
        console.log('movies=====')
        
        setCategories(prevCategories => {
          return [
            ...prevCategories,
            ...data
          ]
        })
      }) 

    },[])
  
    function handleClick(id){
      setYear(2012)
      setSelectedCategory(id)
    }

 
  return (
    <>
    <div className={classes.content}>
        <Sidebar selectedCategory={selectedCategory} categories={categories} setSelectedCategory={handleClick}/>
  
        <div className={classes.movies}> 

         <Movies selectedCategory={selectedCategory} year={year} setYear={setYear}/>
        </div>

      
    </div>
 

    </>
  )
}

export default Feed
