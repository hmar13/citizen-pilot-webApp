import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import './Dashboard.css';

import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';
import ContactsComponent from './Contacts/ContactsComponent';
export default function Dashboard() {
  return (
    <div className="dash-container">
      <ReportTab />
      <ProjectTab />
      <LiveProposals />

      <ContactsComponent />
    </div>
  );
}
