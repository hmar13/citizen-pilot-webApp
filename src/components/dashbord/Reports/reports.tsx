import React from 'react';
import './reports.css';
import Report from './Report/Report';
const MOCKDATA = [
  {
    category: 'transport',
    description: 'There is a big hole in the road. Street number 5.',
    latitude: 44.78930726934227,
    longitude: 20.483746780551883,
    urgency: true,
    image:
      'https://curiouscatontherun.files.wordpress.com/2013/10/krasnoyarsk-4.jpg',
    Fname: 'Corona',
    Lname: 'Bench',
    email: 'corona@gmail.com',
  },

  {
    category: 'environment',
    description: 'River is blue',
    latitude: 44.81655677954322,
    longitude: 20.44972249719375,

    urgency: false,
    image:
      'https://restorationmasterfinder.com/restoration/wp-content/uploads/2017/05/flooded-apartment-portland-or.jpg',
    Fname: 'Haydn',
    Lname: 'Ozzie',
    email: 'haydn@gmail.com',
  },

  {
    category: 'transport',
    description: 'There is a big hole in the road. Street number 5.',
    latitude: 44.78930726934227,
    longitude: 20.483746780551883,
    urgency: true,
    image:
      'https://curiouscatontherun.files.wordpress.com/2013/10/krasnoyarsk-4.jpg',
    Fname: 'Corona',
    Lname: 'Bench',
    email: 'corona@gmail.com',
  },
];

const ReportTab = () => {
  return (
    <div className="Report-tab">
      <div className="Report-tab-header-text-containter">
        <div className="blue-color-box"></div>
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
