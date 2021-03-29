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
    image: 'img',
    Fname: 'Corona',
    Lname: 'Bench',
    email: 'corona@gmail',
  },

  {
    category: 'environment',
    description: 'River is blue',
    latitude: 44.81655677954322,
    longitude: 20.44972249719375,

    urgency: false,
    image: 'img',
    Fname: 'Haydn',
    Lname: 'Ozzie',
    email: 'haydn@gmail',
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

  const tabColor = {
    backgroundColor: '#3d41d7',
  };

  return (
    <div className="reports-container">
      <div>
        {MOCKDATA.map((report) => (
          <div style={tabColor}>
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
