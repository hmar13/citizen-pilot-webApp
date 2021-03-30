import React, { useState, useEffect } from 'react';
import ReportTab from './ReportTab/ReportTab';
import DescriptionTab from './DescriptionTab/DescriptionTab';
import { report } from '../../types';
import './reports.css';

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
];

const Reports = () => {
  const [
    descriptionContainerData,
    setDescriptionContainerData,
  ] = useState<report>({
    category: '',
    description: '',
    latitude: 0,
    longitude: 0,
    urgency: false,
    image: '',
    Fname: '',
    Lname: '',
    email: '',
  });

  const [isClicked, setClicked] = useState(false);

  return (
    <div className="reports-container">
      <div className="scroll-container">
        {MOCKDATA.map((report) => (
          <div className="tab">
            <ReportTab
              report={report}
              setClicked={setClicked}
              setDescriptionContainerData={setDescriptionContainerData}
            />
          </div>
        ))}
      </div>
      <DescriptionTab
        descriptionContainerData={descriptionContainerData}
        isClicked={isClicked}
      />
    </div>
  );
};

export default Reports;
