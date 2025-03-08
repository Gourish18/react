import React from 'react'
import {movies} from '../MovieZone/data.js'
import {useState} from 'react'
import FilterButtons from './FilterButtons.jsx'
const Movies = () => {
  const [movieList, setMovieList] = useState(movies)
    // Define categories and filterMovies inside the component
    const categories = ["All", ...new Set(movies.map((movie) => movie.category))];

    // Function to filter movies by category
    const filterMovies = (category) => {
      if (category === "All") {
        setMovieList(movies);
      } else {
        setMovieList(movies.filter((movie) => movie.category === category));
      }
    };
  return (
  
    <div>
      <FilterButtons categories={categories} filterMovies={filterMovies}/>
   
      <div  className='movie-container' >
      {
        movieList.map((data)=><div key={data.id} style={{maxWidth:"300px", margin:"10px", padding:"10px"}} >
          <div style={{padding:"10px"}} className='hover_effect'>
            <img src={data.poster_path} alt=" movie images" style={{width:"240px", padding:"10px", height:"340px", borderRadius:"20px",border:"1px solid yellow"}}/>
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>)
      }
    </div>
    </div>
  )
}

export default Movies