import React, { useState, SetStateAction } from 'react';
import './newProposalTab.css';
import { proposal } from '../../../types';
type props = {
  proposal: proposal;
};

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

  const approveVoting = () => {
    // PUT REQUEST FOR CHANGING PROPOSAL APPROVAL, ALLOWING THEM TO BE VOTED
  };

  const handleDelete = () => {
    // DELETE PROPOSAL FOREVEER!!!!
  };

  return (
    <div className="container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">{description}</div>
      <div className="location">{location}</div>
      <img src={image} alt="Park" className="image" />
      {/* <div>{votes}</div> */}
      <div className="buttons">
        <button onClick={approveVoting}>Enable Voting</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default NewProposalTab;
