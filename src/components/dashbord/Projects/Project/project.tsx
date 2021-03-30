import React from 'react';
import './project.css';
import { project } from '../../../../types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
type props = {
  project: project;
};

const Project: React.FC<props> = ({ project }) => {
  const { title, description, location, completion, image } = project;

  return (
    <div className="project-box">
      <div className="project-images">
        <img src={image} alt="Project" />
      </div>
      <div className="title-description">{title}</div>
      <div className="progress-description">
        <CircularProgressbar value={completion} text={`${completion}%`} />
      </div>
      <div className="icon-button-container">
        <IconButton className="icon-button">
          <EditIcon style={{ color: '#888' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Project;
