import React from 'react';
import './liveProposals.css';
import Proposal from './Proposal/proposal';
// import ProgressBar from 'react-bootstrap/ProgressBar';

const MOCK_DATA_PROPOSALS = [
  {
    title: 'New Benches in the park',
    description:
      'We should put more benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    votes: 500,
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
    approved: true,
    userId: 3,
  },
  {
    title: 'Something something',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    location: 'City Center',
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
