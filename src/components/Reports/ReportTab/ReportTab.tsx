import React, { useState, SetStateAction } from 'react';
import './ReportTab.css';
import { report } from '../../../types';
import useClipboard from 'react-use-clipboard';
import Button from '@material-ui/core/Button';

type Props = {
  report: report;
  setClicked: React.Dispatch<SetStateAction<boolean>>;
  setDescriptionContainerData: React.Dispatch<SetStateAction<report>>;
  // onClick () : void;
};
const ReportTab: React.FC<Props> = ({
  report,
  setClicked,
  setDescriptionContainerData,
}) => {
  const { Fname, Lname, category, urgency, email } = report;
  const [isCopied, setCopied] = useClipboard(email);

  return (
    <div className="report-Container">
      <div className="headline-Container">
        <h2 className="report-description-text">
          {category.charAt(0).toUpperCase() + category.slice(1)} problem
        </h2>
        <div className={urgency ? 'urgency-red' : 'urgency-blue'}></div>
      </div>
      <div className="contact-Container">
        <div className="info">
          <p>
            From {Lname} {Fname}
          </p>
        </div>
        <div className="email" onClick={setCopied}>
          <p>{email}</p>
          <div>{!isCopied ? <div /> : 'Copied'}</div>
        </div>
      </div>

      <button
        className="info-button"
        onClick={() => {
          setClicked(true);
          setDescriptionContainerData(report);
        }}
      >
        Info
      </button>
    </div>
  );
};

export default ReportTab;
