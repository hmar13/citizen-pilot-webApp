import React from 'react';
import './reports.css';
import Report from './Report/Report';
const MOCKDATA = [
  {
    category: 'roads and streets',
    description: 'Just found a tree blocking the road',
    latitude: 44.78930726934227,
    longitude: 20.483746780551883,
    urgency: true,
    image:
      'https://images.unsplash.com/photo-1591497108596-436c1a1a5c8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    Fname: 'D',
    Lname: 'Georgie',
    email: 'dgeorgie@gmail.com',
  },
  {
    category: 'environment',
    description: 'Lost my dog in Miami, please report if found.',
    latitude: 44.81655677954322,
    longitude: 20.44972249719375,
    urgency: true,
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80',
    Fname: 'Haydn',
    Lname: 'Martin',
    email: 'haydnm@gmail.com',
  },
  {

    category: 'utilities',
    description: 'Power is out all along our street!',

    latitude: 44.78930726934227,
    longitude: 20.483746780551883,
    urgency: true,
    image:
      'https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    Fname: 'Matthew',
    Lname: 'Dodsworth',
    email: 'Dodiddy@yahoo.com',
  },
  {
    category: 'transport',
    description: 'Heaps of traffice on the M4',
    latitude: 44.78930726934227,
    longitude: 20.483746780551883,
    urgency: false,
    image:
      'https://images.unsplash.com/photo-1415594445260-63e18261587e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    Fname: 'Matthew',
    Lname: 'Dodsworth',
    email: 'Dodiddy@yahoo.com',
  },
];

const ReportTab = () => {
  return (
    <div className="Report-tab">
      <div className="Report-tab-header-text-containter">
        <p className="Report-tab-header-text">Reports</p>
      </div>
      <div>
        {MOCKDATA.map((report) => (
          <Report report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportTab;
