import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './DashButton.css'
import ReportCard from './reportsButton';
import Progressbar from './ProgressBar'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function DashButton() {
  const classes = useStyles();

  return (
    <div className='buttonContainer'>

      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="../../../assets/warning.png"
          title="first car"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            this area is for the lastest updates of something
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
         Newest Proposal
        </Button>
      </CardActions>
      </Card>
        </div>
        <div>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="../../../assets/warning.png"
          title="traffic report"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           traffic
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           review the lastes trffic and send out an alert
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Send Alert
        </Button>
      </CardActions>
      </Card>
      </div>
      <div>
        
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="../../../assets/warning.png"
          title="Weather warnings"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           lastes Weather reports 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           see the weather
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Send an Alert
        </Button>
      </CardActions>
      </Card>
        </div>
      <ReportCard/>
      <div style={{ width: 250, height: 300 }}>
        <Progressbar />
      </div>
        <div>
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="../../../assets/warning.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>

      </div>
      </div>
  );
}