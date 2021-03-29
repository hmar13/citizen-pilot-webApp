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
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  img1: {
    height: 200,
    width:200
  }
});

export default function DashButton() {
  const classes = useStyles();

  return (
    <div className='buttonContainer'>

    <div>
    <Card className={classes.root}>
      <CardActionArea >
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Proposals   
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            this area is for the lastest updates of something
          </Typography>
        </CardContent>
      </CardActionArea>
          <CardActions>
          <Link to='/LogIn'>   
        <Button variant="contained" color="primary">
                Newest Proposal
        </Button>
      </Link>
      </CardActions>
      </Card>
        </div>
        <div>
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Traffic Reports
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Review the lastest traffic and send out an alert!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
        Send Alert
        </Button>
      </CardActions>
      </Card>
      </div>
      <div> 
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Lastest Weather reports 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           see the weather
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
         Send an Alert
        </Button>
      </CardActions>
      </Card>
        </div>
      <ReportCard/>
      <div style={{ width: 290, height: 350 }}>
        <Progressbar />
      </div>
        <div >
     <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Polls
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Quick view to all active polls           
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

      </div>
      </div>
  );
}