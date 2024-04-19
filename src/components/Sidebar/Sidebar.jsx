import React from 'react'
import {categories} from '../utilis/constantCategory'
import classes from './Sidebar.module.css'

const Sidebar = ({selectedCategory,setSelectedCategory,categories}) => {
  
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
      {categories.map(category=>(
        <button key={category.id} onClick={()=>setSelectedCategory(category.id)}  style={{background: category.id === selectedCategory && '#F0283C',
            color:'white'}}>
         <span className={classes.category}>{category.name}</span> 
        </button>
      ))}
      </div>
    </div>
  )
}

export default Sidebar
