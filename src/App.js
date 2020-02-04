import React from 'react';
import './App.css';
import Nav from './other/Nav'
import Home from './other/Home'
import LoginScreen from './login_page/LoginScreen';
import AddNotesScreen from './addNotes_page/AddNotesScreen';
import NewBakeScreen from './newBake_page/NewBakeScreen';
import ViewBakesScreen from './viewBakes_page/ViewBakesScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false,
       userId: '',
       date: '',
       email: '',
       password: '',
       bakes: []
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
    this.setState({
      loggedIn: true,
      email: values.email,
      password: values.password
    })
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => { console.log('data returned from post request', data) 
          this.setState({
            userId: data.id,
            bakes: data.bakes
          })
        })
        .then(console.log('is this line 57', this.state))
        // console.log('state after login form submitted', this.state)
    // this.redirectLogin();
  }

  // new bake post request
  handlePost = (event) => {
    console.log('post request received', event)
    fetch('http://localhost:3000/bakes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => { console.log('data returned from post request', data)
          // this.setState({
          //   userId: data.id,
          //   date: data.created_at
          // })
        })

  }
  
  // redirectLogin = () => {
  //   console.log('redirect requested')
  //   return <Redirect to='/newBake' />
  // }
  
  render() {
    return (
      <Router>
        <div>
          <Nav loggedInUser={this.state.email} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route 
              path='/login' 
              render={() => 
                <LoginScreen handleSubmitProps={this.handleFormSubmit} />
              } 
              />

            <Route path='/newBake'               
            render={() => 
                <NewBakeScreen handlePost={this.handlePost} userId={this.state.userId} redirectLogin={this.redirectLogin} date={this.state.date} />
              }  
              />

            <Route path='/addnotes' 
              render={() => 
                <AddNotesScreen userId={this.state.userId} />
              } 
            />

            <Route path='/viewbakes' 
              render={() => 
                <ViewBakesScreen userId={this.state.userId} bakes={this.state.bakes} />
              } 
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
