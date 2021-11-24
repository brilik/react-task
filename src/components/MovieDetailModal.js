import { Card, CardActions, CardContent, CardMedia, Dialog, List, Typography } from '@mui/material';
import React from 'react';

function MovieDetailModal({
    modalToggle,
    isOpen,
    movie
}) {
    return (
        <Dialog open={isOpen} onClose={modalToggle}>
            <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${process.env.REACT_APP_API_IMG_URL}/${movie?.poster_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie?.tagline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {
             movie?.title
         }
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

             <List>
                 {/* {
                     Object.entries(movie)?.map(x => {
                        return <ListItem>{x[0]}:{x[1]}</ListItem>
                     })
                 } */}
             </List>
            </div>
          
        </Dialog>

    )
}

export default MovieDetailModal;
