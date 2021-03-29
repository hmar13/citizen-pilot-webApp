import React, { SetStateAction } from 'react';

import './proposals.css';
import NewProposalTab from './ProposalTab/newProposalTab';
import VotingProposalTab from './ProposalTab/votingProposalTab';
import { proposal } from '../../types';
import Divider from '@material-ui/core/Divider';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
const MOCK_DATA = [
  {
    title: 'New Benches in the park',
    description:
      'We should put more benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    votes: 30,
    approved: true,
    userId: 1,
  },
  {
    title: 'New Benches in the park',
    description:
      'We should put less benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?k=6&m=1021170914&s=612x612&w=0&h=MbXPjMmkFVWiRYShvEaQ1ZWLoCw55f1mFu3p6fdZqhE=',
    votes: 0,
    approved: false,
    userId: 3,
  },
];

type props = {
  proposals: proposal[];
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};

const Proposals: React.FC<props> = ({
  proposals,
  setApprovedProposals,
  approvedProposals,
}) => {
  return (
    <div className="page">
      <div className="proposal-container">
        <div className="newProposalsContainer">
          <div className="header-text">
            <div style={{ display: 'flex' }}>
              <EmojiObjectsIcon
                fontSize="large"
                style={{ marginTop: 9, marginRight: 10 }}
              />
              <div>New Proposals</div>
            </div>
            <Divider />
          </div>
          <div className="newProposals">
            {proposals
              .filter((proposal) => !proposal.approved)
              .map((proposal) => (
                <NewProposalTab proposal={proposal} />
              ))}
          </div>
        </div>

        <div className="votingProposalContainer">
          <div className="header-text">
            <div style={{ display: 'flex' }}>
              <HowToVoteIcon
                fontSize="large"
                style={{ marginTop: 9, marginRight: 10 }}
              />
              <div>Live proposals</div>
            </div>
            <Divider />
          </div>
          {proposals
            .filter((proposal) => proposal.approved)
            .map((proposal) => (
              <VotingProposalTab
                proposal={proposal}
                setApprovedProposals={setApprovedProposals}
                approvedProposals={approvedProposals}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Proposals;
