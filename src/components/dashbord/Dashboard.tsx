import React from 'react';
import './Dashboard.css'

// import ProposalCard from './Proposals/Proposals';
// import NewsComponent from './News/NewsComponent';
import ContactsComponent from './Contacts/ContactsComponent';




export default function Dashboard() {
  return (
    <div className='dash-container'>
      <ContactsComponent />
    </div>
  );
}