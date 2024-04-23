import classes from './MovieCard.module.css'
import imgSrc from '../../assets/no image found.jpg'
import { useRef, useState } from 'react'

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Rating from './Rating';
import { fetchCast } from '../utilis/fetchFromAPI';
const MovieCard = ({movie,categories}) => {
  const [cast,setCast]=useState([])
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.4,
      },
    },
  };
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  console.log(categories)
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  
  }, [ctrls, inView]);
  useEffect(()=>{
    fetchCast(movie.id).then(data=>setCast(data))
  },[movie])
  const [readMore,setReadMore] = useState(false)
  return (
    <motion.article  ref={ref}
    key={movie.id}
    initial="hidden"
    animate={ctrls}
    variants={cardAnimation}
    className={classes.movieCard}>
      <img src={`${movie['poster_path'] ? `https://image.tmdb.org/t/p/w500${movie['poster_path']}` : imgSrc}`} alt={movie['original_title']}/>
      <div className={classes.movieCard__content}>
            <h2 className={classes.movie_title}>{movie['original_title']}</h2>
            <Rating rating={movie['vote_average']}/>
            <p className={classes.overview}>{readMore ? `${movie['overview'].split('. ')[0]}.` :`${movie['overview'].slice(0,60)} `} 
              <button onClick={()=>{setReadMore(!readMore)}}>
                {readMore ? ' Show less' : ' Read more'}
              </button>
            </p> 
            <span className={classes.castTitle}>Cast</span>
            <ul className={classes.cast}>
              {
                cast.sort((a,b)=> b.popularity - a.popularity)
                .filter(actor=>actor.known_for_department == 'Acting')
                .slice(0,6)
                .map(actor=> <li> 
                                <img src={`https://image.tmdb.org/t/p/w500${actor['profile_path']}`}/>
                                <span>{actor.name ? actor.name : actor.original_name}</span>
                            </li>)
                }            
              
                  
            
            </ul>
            <ul className={classes.categories}>
              
                {categories?.filter((item,i)=> movie['genre_ids'].includes(categories[i].id)).map(category=><li key={category.id}>{category.name}</li>)}
            </ul>
            
      </div>
    </motion.article>
  )
}

export default MovieCard
