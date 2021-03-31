import React, { SetStateAction } from 'react';
import './ReportTab.css';
import { report } from '../../../types';
import useClipboard from 'react-use-clipboard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

type Props = {
  report: report;
  setClicked: React.Dispatch<SetStateAction<boolean>>;
  setDescriptionContainerData: React.Dispatch<SetStateAction<report>>;
  // onClick () : void;
};

const useStyles = makeStyles({
  button: {
    alignSelf: 'flex-end',
    marginRight: '15px',
    color: '#fefcfb',
    backgroundColor: '#1282a2',
  },
});

const ReportTab: React.FC<Props> = ({
  report,
  setClicked,
  setDescriptionContainerData,
}) => {
  const { Fname, Lname, category, urgency, email, image } = report;
  const [isCopied, setCopied] = useClipboard(email);

  const classes = useStyles();

  return (
    <div className="report-Container">
      <img src={image} className="report-image" alt="ReportImage" />
      <div className="headline-Container">
        <h2 className="report-description-text">
          {category.charAt(0).toUpperCase() + category.slice(1)} problem
        </h2>
        <div>
          {urgency ? <NewReleasesIcon className="urgentIcon" /> : <div />}
        </div>
      </div>
      <div className="contact-Container">
        <div className="info">
          <p style={{ color: '#fefcfb' }}>
            From {Lname} {Fname}
          </p>
        </div>
        <div className="email" onClick={setCopied}>
          <div className="email-box">
            <p style={{ color: '#ef8354' }}>{email}</p>
          </div>
          {/* <div className="coppied-to-clipboard">
            {!isCopied ? <div /> : 'Copied to clipboard'}
          </div> */}
        </div>
      </div>

      <Button
        className={classes.button}
        onClick={() => {
          setClicked(true);
          setDescriptionContainerData(report);
        }}
      >
        Info
      </Button>
    </div>
  );
};

export default ReportTab;
