import React from 'react';
import { proposal } from '../../../../types';
import './proposal.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

type props = {
  proposal: proposal;
};

const useStyles = makeStyles({
  button: {
    background: 'white',
    height: '25px',
    width: '32px',
    borderRadius: '15px',
    color: 'linear-gradient(-135deg, #899FD4 0%, #A389D4 100%)',
    fontSize: '12px',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
    marginRight: '20px',
  },
});

const Proposal: React.FC<props> = ({ proposal }) => {
  const { title, description, location, image, votes } = proposal;

  const classes = useStyles();

  return (
    <div className="proposal-box">
      <div className="proposal-title">{title}</div>
      <div className="location-box">
        <LocationOnIcon className="location-icon" />
        <div className="proposal-location">{location}</div>
      </div>
      <div className="proposal-description">{description}</div>
      <div className="votes-and-button">
        <div className="votes">
          <HowToVoteIcon className="vote-icon" />
          <div className="votes-text">{votes}</div>
        </div>
        <Button size="small" className={classes.button}>
          More
        </Button>
      </div>
    </div>
  );
};

export default Proposal;
