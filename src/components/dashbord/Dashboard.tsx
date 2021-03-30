import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import './Dashboard.css';
import DashButton from './dashcontent/DashButtons';
import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';
export default function Dashboard() {
  return (
    <div className="dash-container">
      <ReportTab />
      <ProjectTab />
      <LiveProposals />
    </div>
  );
}
