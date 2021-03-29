import React, { useState, SetStateAction } from 'react';
import './newProposalTab.css';
import { proposal } from '../../../types';
type props = {
  proposal: proposal;
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};

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
    <div className="container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">{description}</div>
      <div className="location">{location}</div>
      <img src={image} alt="Park" className="image" />
      <div>{votes}</div>
      {/* <div>{votes}</div> */}
      <div className="buttons">
        <button onClick={handleApprove}>Approve</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default VotingProposalTab;
