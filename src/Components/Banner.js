import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'


// function Banner({fetchUrl}) {
//     //movies state
//     const [movie,setMovies]=useState([])
//     async function fetchData(){
//       const result=  await instance.get(fetchUrl)
//       console.log(result.data.results);
//       setMovies(result.data.results[
//         Math.floor(Math.random()*result.data.results.length-1)
//       ])
//   }

//     useEffect(()=>{
//       fetchData()
//     },[])
//     const base_url = "https://image.tmdb.org/t/p/original/";

//     console.log(movie);
function Banner({ fetchUrl }) {
  const [movie, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(fetchUrl);
      console.log(result.data.results);
      setMovies(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, [fetchUrl]);

    function truncate(str,n){
      n=100;
     return str?.length>n ? str.substr(0,n-1)+". . .":str;
    }
  return (
    <div className='banner' style={
        {
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
            
        }}>
            <div className='banner_content'>
                <h1 className='banner_title'>{movie.name}</h1>
                <h3 className='banner_desc'>{truncate(movie.overview)}</h3>
            </div>

    </div>
  )
}

export default Banner