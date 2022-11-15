
import React, {useEffect, useState} from 'react'
import {  Col, Row , ButtonGroup, Button} from 'react-bootstrap'
import { CustomCard } from './CustomCard'

export const MovieList = ({movieList, deleteMovie }) => {

    const[displayMovie, setDisplayMovie] = useState([]);
  
  // run every single time after reload   
   useEffect(() => {
    console.log("loading 2");
    setDisplayMovie(movieList);
   }, [movieList])
  
    const selectCategory = cat => {
      cat === 'all' && setDisplayMovie(movieList);
      // console.log(cat);
      cat === 'happy' && setDisplayMovie(movieList.filter(item => item.type === 'happy'));
      cat === 'sad' && setDisplayMovie(movieList.filter(item => item.type === 'sad'));
    }
  
   
  
  
    return (
  
      <div className='bg-dark py-5 rounded p-4 mt-3'>
     <Row>
      <Col>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => selectCategory("all")} variant ="secondary">All</Button>
        <Button onClick={() => selectCategory("happy")} variant="primary">Happy</Button>
        <Button onClick={() => selectCategory("sad")} variant ="info">Sad</Button>
      </ButtonGroup>
  
  
  {/* how many movies are found  */}
  
  <p className='m-3'> {displayMovie.length} movies found</p>
  
      </Col>
     </Row>
     <Row>
      <Col className="d-flex flex-wrap justify-content-around gap-3"> 
  
    {displayMovie.map((item, i) => {
        return <CustomCard movie={item} isDelete={true} func={deleteMovie} />;
  
      })
    }
     
  
      
      </Col>
     </Row>
     </div>
    )
  }
  
