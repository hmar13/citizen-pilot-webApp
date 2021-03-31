import React from 'react';
import './report.css';
import { report } from '../../../../types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

type props = {
  report: report;
};

const useStyles = makeStyles({
  button: {
    background:
      'linear-gradient(90deg, rgba(91,164,252,1) 0%, rgba(58,66,118,1) 100%)',
    height: '25px',
    width: '32px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '12px',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
  },
});

const Report: React.FC<props> = ({ report }) => {
  const {
    category,
    description,
    latitude,
    longitude,
    urgency,
    image,
    Fname,
    Lname,
    email,
  } = report;

  const classes = useStyles();

  return (
    <div className="report-box">
      <div className="description-box">
        <div className="name-text">
          {Lname} {Fname}
        </div>
        <div className="description-text">{description}</div>
      </div>
      <div className="urgent-box">
        {urgency ? (
          <div className="urgentCircle" />
        ) : (
          <div className="notUrgentIcon" />
        )}
      </div>
      <div className="category-text">{category.toUpperCase()}</div>
      <div className="info-button-container">
        <Button size="small" className={classes.button}>
          More
        </Button>
      </div>
    </div>
  );
};

export default Report;
