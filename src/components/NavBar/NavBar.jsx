import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import classes from './NavBar.module.css'
const NavBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate()
  const onSubmit=(e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <header>
      <Link><h1>MovieFix</h1></Link>
      <form className={classes.searchIntput} onSubmit={onSubmit}>
        <input type="text" placeholder='Search Movie.....'  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <button aria-labelledby='Search movie' type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </header>
    
  )
}

export default NavBar
