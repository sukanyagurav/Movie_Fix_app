import axios from 'axios';

// const BASE_URL='https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100'

export const fetchFromAPI = async(category=1,year=2012)=>{

  const  {data:{results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`)
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