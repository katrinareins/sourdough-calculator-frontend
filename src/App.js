import React from 'react';
import './App.css';
import Nav from './other/Nav';
import LoginScreen from './login_page/LoginScreen';
import AddNotesScreen from './addNotes_page/AddNotesScreen';
import NewBakeScreen from './newBake_page/NewBakeScreen';
import ViewBakesScreen from './viewBakes_page/ViewBakesScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false,
       email: '',
       password: '',
       bake: [],
       note: []
    }
  }

  //toggle login function
  toggleLogin = () => {
    this.setState(prevState => {
      return {loggedIn: !prevState.loggedIn}
    })
  }

  // handle login form submit
  handleFormSubmit = (values) => {
    
    console.log("Login request gets to app", values)
  }
  
  
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route 
              path='/' exact 
              // component={loginScreen} 
              render={() => 
                <LoginScreen handleSubmitProps={this.handleFormSubmit} />
              } 
              />

            <Route path='/newBake' component={NewBakeScreen} />

            <Route path='/addnotes' component={AddNotesScreen} />

            <Route path='/viewbakes' component={ViewBakesScreen} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
