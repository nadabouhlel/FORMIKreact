import React from 'react'
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardActionArea';
import Typography from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActionArea';
import Button from '@mui/material/CardActionArea';




function Card() {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="**"
          image="C:\Users\NADA\Downloads\formikform\src\components\images\rocket.jpg"
          alt="Rocket"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WELCOME
          </Typography>
          <Typography variant="body2" color="text.secondary">
            here is your Rocket space sign in and become a new member !
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          LogIn
        </Button>
      </CardActions>
    </Card>
    )
}

export default Card


