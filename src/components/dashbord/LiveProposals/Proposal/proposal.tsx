import React from 'react';
import { proposal } from '../../../../types';
import './proposal.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

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
  progressBar: {
    color: 'white',
    height: '10px',
    borderRadius: '3px',
    marginTop: '5px',
  },
});

const Proposal: React.FC<props> = ({ proposal }) => {
  const { title, description, location, image, votes } = proposal;
  const normalise = (value: number) => (value * 100) / 1000;
  const classes = useStyles();

  return (
    <div className="proposal-box">
      <div className="proposal-title">{title}</div>
      <div className="proposal-description">
        {description.slice(0, 180)} ...
      </div>
      <div className="votes-and-the-bar">
        <div className="linear-progress-bar">
          <LinearProgressWithLabel
            className={classes.progressBar}
            variant="determinate"
            value={normalise(votes)}
          />
        </div>

        <div className="votes">
          <HowToVoteIcon className="vote-icon" />
          <div className="votes-text">{votes}</div>
        </div>
      </div>
      <div className="location-box">
        <LocationOnIcon className="location-icon" />
        <div className="proposal-location">{location}</div>
      </div>
      <div className="button-box">
        <Button size="small" className={classes.button}>
          More
        </Button>
      </div>
    </div>
  );
};

export default Proposal;
