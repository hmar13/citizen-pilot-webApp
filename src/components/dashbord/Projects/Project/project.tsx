import React from 'react';
import './project.css';
import { project } from '../../../../types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
type props = {
  project: project;
};

const useStyles = makeStyles(() => ({
  button: {
    width: 80,
    padding: 0,
  },
}));

const Project: React.FC<props> = ({ project }) => {
  const { title, description, location, completion, image } = project;
  const classes = useStyles();
  return (
    <div className="project-box">
      <div className="project-images">
        <div className="progress-description">
          <CircularProgressbar value={completion} text={`${completion}%`} />
        </div>
      </div>
      <div className="title-description">{title}</div>
      <div className="icon-button-container">
        <IconButton className={classes.button}>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Project;
