import React, { useState, SetStateAction } from 'react';
import './newProposalTab.css';
import { proposal } from '../../../types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type props = {
  proposal: proposal;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 420,
  },
  media: {
    height: 150,
  },
  button: {
    height: 50,
    color: 'white',
    fontSize: '14px',
    backgroundColor: '#4571cb',
  },

  buttonDelete: {
    height: 50,
    color: 'white',
    fontSize: '14px',
    backgroundColor: '#4571cb',
    '&:hover': {
      background: '#ac1010',
    },
  },
  description: {
    height: 130,
  },
  buttonsNewProposal: {
    width: 345,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const NewProposalTab: React.FC<props> = ({ proposal }) => {
  const {
    title,
    description,
    location,
    votes,
    image,
    approved,
    userId,
  } = proposal;

  const classes = useStyles();

  const approveVoting = () => {
    // PUT REQUEST FOR CHANGING PROPOSAL APPROVAL, ALLOWING THEM TO BE VOTED
  };

  const handleDelete = () => {
    // DELETE PROPOSAL FOREVEER!!!!
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="New Proposal" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.buttonsNewProposal}>
          <Button
            variant="contained"
            onClick={approveVoting}
            size="small"
            color="primary"
            className={classes.button}
          >
            Enable Voting
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            size="small"
            color="primary"
            className={classes.buttonDelete}
          >
            Delete
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default NewProposalTab;
