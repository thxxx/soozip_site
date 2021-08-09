import React, { Suspense } from 'react'
import LandingPage from './views/LandingPage/LandingPage'
import NavBar from './views/NavBar/NavBar'
import Footer from './views/Footer/Footer'
import SneakersPage from './views/CategoryPage/SneakersPage'
import Feedback from './views/Feedback/Feedback'
import {HashRouter as Router, Route, Switch} from "react-router-dom"

function App() { 
  return (
    <Suspense fallback={(<div style={{fontSize:'5em', color:'green'}}>Loading...</div>)}>
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sneakers" component={SneakersPage} />
          <Route exact path="/feedback" component={Feedback} />
        </Switch>
        <Footer />
    </div>
    </Suspense>
  );
}

export default App;
