import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { proposal } from './types';
// import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';
import SideNav from './navigation/sideNav';
import Reports from './components/Reports/Reports';
import News from './components/News/News';
import Proposals from './components/Proposals/Proposals';
import Contacts from './components/Contacts/Contacts';
import Dashboard from './components/dashbord/Dashboard';

import SignIn from './components/login/Login';

const MOCK_DATA_PROPOSALS = [
  {
    title: 'New Benches in the park',
    description:
      'We should put more benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://image.freepik.com/free-photo/park-bench-nature_19-115455.jpg',
    votes: 30,
    approved: true,
    userId: 1,
  },
  {
    title: 'New Benches in the park',
    description:
      'We should put less benches in the park as I think that is the best idea',
    location: 'City Park',
    image:
      'https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?k=6&m=1021170914&s=612x612&w=0&h=MbXPjMmkFVWiRYShvEaQ1ZWLoCw55f1mFu3p6fdZqhE=',
    votes: 0,
    approved: false,
    userId: 3,
  },
];

function App() {
  const [proposals, setProposals] = useState(MOCK_DATA_PROPOSALS);
  const [approvedProposals, setApprovedProposals] = useState<proposal[] | []>(
    []
  );
  // useEffect(() => {
  //   setProposals(MOCK_DATA_PROPOSALS);
  // }, [proposals]);
  return (
    <BrowserRouter>
      <SideNav />
      <Switch>
        {/* <Route exact path="/login" component={SignIn}></Route> */}
        {/* <Route exact path="/home" component={Dashboard}></Route> */}
        <Route exact path="/reports" component={Reports}></Route>
        {/* <Route exact path="/contacts" component={Contacts}></Route> */}
        <Route
          exact
          path="/projects"
          render={(props) => (
            <Projects
              {...props}
              setApprovedProposals={setApprovedProposals}
              approvedProposals={approvedProposals}
            />
          )}
        ></Route>
        <Route
          exact
          path="/proposals"
          render={(props) => (
            <Proposals
              {...props}
              proposals={proposals}
              setApprovedProposals={setApprovedProposals}
              approvedProposals={approvedProposals}
            />
          )}
        ></Route>
        <Route
          exact
          path="/news"
          render={(props) => (
            <News />
          )}
        ></Route>
        {/* <Route exact path="/activePolls" component={ActivePolls}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
