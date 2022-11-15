import React from 'react'
import {  Card, Button} from 'react-bootstrap'


export const CustomCard = ({movie, add, func, isDelete, remov}) => {
    return (
     
      <Card style={{ width: '16rem', color:"black" }} className="card-1">
      <Card.Img variant="top" src={movie.Poster}  style={{height:'12rem'}}/>
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Text>
           Rating: {movie?.imdbRating} <br>
           </br>
           Year: {movie?.Year}
          </Card.Text>
  {/* if else condition for deleteion ternary option  */}
          {isDelete ?(
            <div className="d-grid">
            <Button onClick={() => func(movie.imdbID)} variant='danger'>delete</Button>
          </div>
  
          ):
          
  
  <div className='d-flex justify-content-between'>
  <Button  onClick={() => add({ ...movie, type:"happy"})} variant="primary">happy</Button>
  <Button  onClick={() => add({ ...movie, type:"sad"})} variant="info">lazy</Button>
  <Button  onClick={() => remov(movie.imdbID)} variant="secondary">remove</Button>
  </div>
          
          }
          
          
        </Card.Body>
      </Card>
    )
  }
  
