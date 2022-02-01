import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import MemeEditPage from './views/MemeEditPage';
import Header from './components/layout/Header';

function App() {

  useEffect(() => {
		console.log = function() {}
	}, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id/:text_boxes" component={MemeEditPage} />
      </Switch>
    </Router>
  );
}

export default App;
