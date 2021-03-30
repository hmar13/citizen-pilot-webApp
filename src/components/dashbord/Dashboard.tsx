import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import './Dashboard.css'
import DashButton from './dashcontent/DashButtons';




export default function Dashboard() {
  return (
    <div className='dashContainer'>
      <DashButton/>
    </div>
  );
}