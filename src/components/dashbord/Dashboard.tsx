import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import './Dashboard.css';

import ProposalCard from './Proposals/Proposals';
import NewsComponent from './News/NewsComponent';
import ContactsComponent from './Contacts/ContactsComponent';
import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';





export default function Dashboard() {
  return (
    <div className="dash-container">
      <ReportTab />
      <ProjectTab />
      <LiveProposals />
      <NewsComponent />
      <ContactsComponent />
      <ProposalCard />
    </div>
  );
}
