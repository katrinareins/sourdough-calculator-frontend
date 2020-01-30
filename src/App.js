import React from 'react';
import './App.css';
import Nav from './other/Nav';
import loginScreen from './login_page/loginScreen';
import addNotesScreen from './addNotes_page/addNotesScreen';
import newBakeScreen from './newBake_page/newBakeScreen';
import viewBakesScreen from './viewBakes_page/viewBakesScreen';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={loginScreen} />
          <Route path='/newBake' component={newBakeScreen} />
          <Route path='/addnotes' component={addNotesScreen} />
          <Route path='/viewbakes' component={viewBakesScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
