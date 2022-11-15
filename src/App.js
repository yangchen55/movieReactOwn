import React, {useState, useEffect} from 'react'
import './App.css';
import {Container} from 'react-bootstrap'
import { Title } from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';
function App() {
  const[movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    // filter out the movie if it already in the list
    const filteredMovies = movieList.filter(item => 
      item.imdbID !== movie.imdbID)
    // add the incoming movie 

    setMovieList([...filteredMovies, movie]);

  }


   // to delete movie
   const deleteMovie = (id) => {
    if(!window.confirm("are you sure delete?")){
      return;
    }

    setMovieList(movieList.filter(item => 
      item.imdbID !== id));
  }

 
  return (
    <div className="wrapper">
      <Container>
       <Title/>
       <SearchForm add={addMovie}/>
       <MovieList movieList={movieList}  deleteMovie ={deleteMovie} />
      </Container>
      
    </div>
  );
}

export default App;
