import React from 'react';
import './liveProposals.css';
import Proposal from './Proposal/proposal';
const MOCK_DATA_PROPOSALS = [
  {
    title: 'Build more benches along the broadwater',
    description:
      'Currently a proposal has been made to build more benches along the broadwater in Mermaid Beach. This would include one for every 25m along the beach.',
    location: 'Mermaid Beach',
    image:
      'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    votes: 30,
    approved: true,
    userId: 1,
  },
  {
    title: 'Renovate Main Street pavements',
    description:
      'The pavements on Main street are believed to be in disrepair and a proposal has been made to fix its current state.',
    location: 'Main Street, City Park',
    image:
      'https://images.unsplash.com/photo-1584696049838-8e692282a2e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    votes: 1,
    approved: true,
    userId: 3,
  },
  {
    title: 'Release the Snyder Cut 2',
    description:
      'With Justice League, the Snyder Cut, having just become available, we are petitioning to see if DC Comics will film their next installment on the Gold Coast.',
    image:
      'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    location: 'Gold Coast',
    votes: 30,
    approved: true,
    userId: 2,
  },
];

const LiveProposals = () => {
  return (
    <div className="proposal-Container-box">
      <div className="boxy">
        {MOCK_DATA_PROPOSALS.map((proposal) => (
          <Proposal proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default LiveProposals;
