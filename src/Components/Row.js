import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Row.css'
function Row({isLargeRow,title,fetchUrl}) {

    //movies state
    const [movies,setMovies]=useState([])
    async function fetchData(){
      const result =  await instance.get(fetchUrl)
      console.log(result.data.results);
      setMovies(result.data.results)
    }
    useEffect(()=>{
      fetchData()
    },[])

    const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies'>
        {
          movies.map(movie=>(
            <img 
            className={`movie ${isLargeRow && "largeMovie"}`}
            src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            />
            
          ))
        }
      </div>
    </div>
  )
}

export default Row