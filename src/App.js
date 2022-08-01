import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import HandSignal from './pages/HandSignal/HandSignal';
import Rcl from './pages/Rcl/Rcl';
import Range from './pages/Range/Range';
import ConvertWeights from './pages/ConvertWeights/ConvertWeights';
import PartOfLine from './pages/PartOfLine/PartOfLine';
import Navbar from './Components/Navbar/Navbar';
import BoomAngle from './pages/BoomAngle/BoomAngle'
import GrossCapacity from './pages/GrossCapacity/GrossCapacity'
import LoadedBoomAngle from './pages/LoadedBoomAngle/LoadedBoomAngle'
import MaximumBoomLength from './pages/MaximumBoomLength/MaximumBoomLength'
import MaximumRadius from './pages/MaximumRadius/MaximumRadius'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Range/>
        </Route>
        <Route path="/HandSignal" exact>
          <HandSignal/>
        </Route>
        <Route path="/ConvertWeights" exact>
          <ConvertWeights/>
        </Route>
        <Route path="/PartOfLine" exact>
          <PartOfLine/>
        </Route>
        <Route path="/Rcl" exact>
          <Rcl/>
        </Route>
        <Route path="/BoomAngle" exact>
          <BoomAngle/>
        </Route>
        <Route path="/GrossCapacity" exact>
          <GrossCapacity/>
        </Route>
        <Route path="/LoadedBoomAngle" exact>
          <LoadedBoomAngle/>
        </Route>
        <Route path="/MaximumBoomLength" exact>
          <MaximumBoomLength/>
        </Route>
        <Route path="/MaximumRadius" exact>
          <MaximumRadius/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
