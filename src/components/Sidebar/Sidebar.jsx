import React from 'react'
import classes from './Sidebar.module.css'
import {motion } from 'framer-motion';
const Sidebar = ({selectedCategory,setSelectedCategory,categories}) => {

  function handleClick(id){
    setSelectedCategory(id)
  }
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
      {categories.map(category=>(
        <motion.button  
        variants={{hidden:{opacity:0,y:-30},
            visible: {opacity:1,y:0}
          }}
          initial="hidden"
          animate="visible"
           key={category.id} onClick={()=>{handleClick(category.id)}}  style={{background: category.id === selectedCategory && '#F0283C',
            color:'white'}}>
         <span className={classes.category}>{category.name}</span> 
        </motion.button>
      ))}
      </div>
    </div>
  )
}

export default Sidebar
