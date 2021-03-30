import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import './Dashboard.css'
import DashButton from './dashcontent/DashButtons';
import ProposalCard from './Proposals/proposals';




export default function Dashboard() {
  return (
    <div className='dash-container'>
      <ProposalCard />
    </div>
  );
}