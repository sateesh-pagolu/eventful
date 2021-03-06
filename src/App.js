import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsList from './components/EventsList/EventsList';
import {Switch, Route} from "react-router-dom"
import NotFound from './components/NotFound';
import { Banner } from './components/Banner/Banner';
import ManageEvent from './components/ManageEvent/ManageEvent';

function App() {
  return (
    <div className={"siteContainer"}>
      <Banner/>
      <div className={"mainContent"}>
        <Switch>
          <Route path="/events" exact component={EventsList} />
          <Route path="/" exact component={EventsList} />
          <Route path="/manage-event" exact component={ManageEvent}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
