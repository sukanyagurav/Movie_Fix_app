import axios from 'axios';

//2dca580c2a14b55200e784d157207b4d
export const fetchFromAPI = async(category,year)=>{

  const  {data:{results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`)

  if(category === 1){
      return results
    }else{
        let tempMovie=[]
       for(let i=0;i<results.length;i++){
            if(results[i]['genre_ids'].includes(category)){
                tempMovie.push(results[i])
            }
       }
       return tempMovie
    }

}
export const fetchGenres = async(url,options)=>{
    const {data:{genres}} = await axios.get(url,options)
    return genres
}
export const fetchSearchMovies = async (searchTerm)=>{
    const {data:{results}} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US`)
    return results
}
export const fetchCast = async (movieId)=>{
    const {data:{cast}} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`)
    return cast
}


