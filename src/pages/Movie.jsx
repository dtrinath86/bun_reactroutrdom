import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MoviesCard from '../UI/MoviesCard';


function Movie() {
 
  const primeVideo = useLoaderData();
  //console.log(primeVideo);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  mb-4">
      {primeVideo.Search.map((videolist) => (
        <MoviesCard key={videolist.imdbID} videolist={videolist}/>
       
      ))}
    </div>
  );
}

export default Movie;
