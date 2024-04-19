
import Sidebar from '../Sidebar/Sidebar'
import Movies from '../Movies/Movies'
import classes from './Feed.module.css'
import { fetchGenres } from '../utilis/fetchFromAPI'
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utilis/fetchFromAPI'

const Feed = () => {
    const [selectedCategory,setSelectedCategory] = useState(1)

    const [categories,setCategories] = useState([ {
      "id": 1,
      "name": "All"
  }])

  


    useEffect(()=>{
      fetchGenres('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=2dca580c2a14b55200e784d157207b4d').then((data)=>{
      
        setCategories(prevCategories => {
          return [
            ...prevCategories,
            ...data
          ]
        })
      }) 

    },[])
  
   

 
  return (
    <>
    <div className={classes.content}>
        <Sidebar selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory}/>
  
        <div className={classes.movies}> 

         <Movies selectedCategory={selectedCategory}/>
        </div>

      
    </div>
 

    </>
  )
}

export default Feed
