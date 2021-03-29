import React, { SetStateAction } from 'react';

import './proposals.css';
import NewProposalTab from './ProposalTab/newProposalTab';
import VotingProposalTab from './ProposalTab/votingProposalTab';
import { proposal } from '../../types';
import Divider from '@material-ui/core/Divider';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HowToVoteIcon from '@material-ui/icons/HowToVote';

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
          <div className="live-proposals">
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
    </div>
  );
};

export default Proposals;
