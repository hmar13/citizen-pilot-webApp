import './Dashboard.css';

import ProposalCard from './Proposals/Proposals';
import NewsComponent from './News/NewsComponent';
import ContactsComponent from './Contacts/ContactsComponent';
import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';


// TODO: Add logo
// TODO: same font everywhere
// TODO: make all box headers same color
// TODO: spacing on top, left and right
// TODO: bring live projects to the left, make it as long as proposal inbox and contacts combined
// TODO: Add more reports so that the list goes all the way to the end of the page OR add a map underneath reports with pins for all locations
// TODO: live proposals, have little image where it says city park,OR graph/status bar underneath the text
// TODO: Add modals


export default function Dashboard() {
  return (
    <div className="dash-container">
      <div className="banner">
      </div>
      <div className="content-container">

        <NewsComponent />
        <ProposalCard />
        <ContactsComponent />
        <ReportTab />

        <div className="last-row">
          <ProjectTab />
          <LiveProposals />

        </div>

      </div>
    </div>
  );
}
