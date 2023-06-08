import React from 'react'
import books from '../../img/books.jpg';
import create from '../../img/create.jpg';
import rooms from '../../img/room.jpeg';
import { Link } from 'react-router-dom';
import "./home.scss"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const home = () => {
  return (
    <div className='home'>
      <div className="head">
      <h3>MyHotels Admin Portal</h3>
      </div>
      <div className="mainpage">
        <div className='cards'>  
        <Link className='link' to="/users/add">
          <Card sx={{ maxWidth:300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={create}
                alt="booking"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Book Room
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

          
        <Link className='link' to="/users">
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={books}
                alt="booking"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bookings
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Link>
         
        <Link className='link' to="/rooms">
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={rooms}
                alt="rooms"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rooms
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default home