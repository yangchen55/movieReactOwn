import React, {useState, useEffect} from 'react'

import {Row, Col, Form,Button, InputGroup} from 'react-bootstrap'
import { CustomCard } from './CustomCard';

export const SearchForm = ({add}) => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState(false)


    const getMovieRequest = async () => {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=f2b88761`;
      const response = await fetch(url);
      const responseJson = await response.json();   
      if (responseJson.Search)  {
              setMovie(responseJson.Search);
          } else{
            setIsError(true);
          }
    };
      useEffect(() => {
          getMovieRequest(search);
      }, [search]);


    const handleOnChange = (e) => {
        var {value}= e.target;
        setSearch(value);
        console.log(setSearch);
       
    }

 // to remove  movie which are in seach form that get by search
const removeMovie = (id) => {
    if(!window.confirm("are you sure remove?")){
      return;
    }
    setMovie(movie.filter(item => 
      item.imdbID !== id));
 
  }
  
  
  const handleOnAddToList = (id) => {
    // send movie to parent component 
      add(id);
     
    console.log(movie);
   
    setMovie = setMovie.filter(add(id));
    // //  reset the form so no text there 
    setSearch("");
  }
    
  return (
    <div className='bg-secondary py-5 rounded p-2'>
    <Form> 
      <Row className='g-2'>
        
        <Col className='d-flex justify-content-center'>
                
          <div className='d-flex' style={{width:"60%"}}>
     
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
        <Form.Control
          placeholder="search"
          onChange={handleOnChange}
          required
          value = {search}
       
        />
      </InputGroup>
      </div>
        </Col> 
      </Row>    
    </Form>

    <p className='m-3'> {movie.length} movies found</p>  
    
    <Row>
      <Col className="d-flex flex-wrap justify-content-around gap-3"> 
         { movie.map((item, i) => { 
          
return <CustomCard movie={item} remov={removeMovie}  add={handleOnAddToList} />; 
      })
    } 
    {/* {isError && (
        <Alert variant = "danger">
        no movie found</Alert>
        )} */}

     </Col>   
   </Row>
    

{/*     
        {" " }

        {/* pass it to the custom card  */}
  
        {/* {movie.imdbID && <CustomCard movie ={movie} func={handleOnAddToList} remov={removeMovie}/>} */}
        {/* <CustomCard movie ={movie} func={handleOnAddToList} remov={removeMovie}/> */}
        

    </div>
 
  )
}
