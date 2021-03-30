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
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
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
    height: 100,
  },
  buttonsNewProposal: {
    width: 345,
    display: 'flex',
    justifyContent: 'space-between',
  },
  votes: {
    fontSize: 30,
    marginBottom: -20,
    marginLeft: 270,
  },
});

const VotingProposalTab: React.FC<props> = ({
  proposal,
  setApprovedProposals,
  approvedProposals,
}) => {
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

  const handleApprove = () => {
    const newApprovedProposals = [...approvedProposals, proposal];
    setApprovedProposals(newApprovedProposals);
    console.log(approvedProposals);
    // after that delete it from the proposals!
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
        <Typography className={classes.votes}>{votes}</Typography>
      </CardContent>
      <CardActions>
        <div className={classes.buttonsNewProposal}>
          <Button
            variant="contained"
            onClick={handleApprove}
            size="small"
            color="primary"
            className={classes.button}
          >
            Approve
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

export default VotingProposalTab;
