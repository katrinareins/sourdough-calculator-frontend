import React from 'react';
import './App.css';
import Nav from './other/Nav'
import Home from './other/Home'
import LoginScreen from './login_page/LoginScreen';
// import AddNotesScreen from './addNotes_page/AddNotesScreen';
import NewBakeScreen from './newBake_page/NewBakeScreen';
import ViewBakesScreen from './viewBakes_page/ViewBakesScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false,
       userId: '',
       bakeId: '',
      //  date: '',
       email: '',
       password: '',
       bakes: []
    }
  }

  // handle login form submit
  handleLogin = (values) => {
    // this.setState({
    //   loggedIn: true,
    //   email: values.email,
    //   password: values.password
    // })
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => { console.log('data returned from user post request', data) 
        this.fetchLoggedInUser(data.id)
          // this.setState({
          //   userId: data.id,
          //   bakes: data.bakes
          // })
        })
        // .then(console.log('state after user login', this.state))
  }

  fetchLoggedInUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({
          loggedIn: true,
          userId: data.id,
          email: data.email,
          password: data.password,
          bakes: data.bakes
    })
    })
  }

  handleLogOut = () => {
    this.setState({
      loggedIn: false,
      userId: '',
      email: '',
      password: '',
      bakes: []
    })
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
        .then(data => { console.log('data returned from bake post request', data) 
        this.setState(prevState => {
          return{
            bakes: [...prevState.bakes, data]
          }
        }, () => console.log('new bake added, state is', this.state))
      })
  }

  // new note post request
  handleNotePost = event => {
    console.log('new note post request received', event)
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => { console.log('data returned from bake post request', data)
        // this.setState({
  
        //     ...this.state.bakes, [
        //       notes: data
        //     ]

        // }, () => console.log('new note added, state is', this.state))
      })
  }

  // note delete 
  deleteNote = noteID => {
    console.log('fetch request called with note ID:', noteID)
    fetch(`http://localhost:3000/notes/${noteID}`, {
      method: "DELETE",
    })
    .then(res => res.json())
  }

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City'
  //   }
  // });

  addNewNote = bakeID => {
    this.setState({
      bakeId: bakeID
    })
  }

  // note patch request
  notePatchRequest = values => {
    console.log('this is note PATCH request!!!', values)

    fetch(`http://localhost:3000/notes/${values.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => { console.log('data returned from note PATCH request', data)
        
      })
  }

  // delete bake
  handleDelete = bakeID => {
    console.log('delete being triggered, number is bake id', bakeID)
    fetch(`http://localhost:3000/bakes/${bakeID}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    this.setState(prevState => {
      return{
        bakes: prevState.bakes.filter(bake => bake.id !== bakeID)
      }
    })
  }
  
  render() {
    return (
      <Router>
        <div>
          <Nav 
          loggedInUser={this.state.email} 
          handleLogOut={this.handleLogOut} />

          <Switch>

            <Route path='/' exact component={Home} />

            <Route 
              path='/login' 
              render={() => 
                <LoginScreen 
                loggedIn={!this.state.loggedIn}
                handleLogin={this.handleLogin} 
                alternate="/viewbakes" />
              } 
              />

            <Route path='/newBake'               
            render={() => 
                <NewBakeScreen 
                handlePost={this.handlePost} 
                userId={this.state.userId} 
                redirectLogin={this.redirectLogin} 
                date={this.state.date} 
                />
              }  
              />

            {/* <Route path='/addnotes' 
              render={() => 
                <AddNotesScreen userId={this.state.userId} handleNotePost={this.handleNotePost} bakes={this.state.bakes} bakeId={this.state.bakeId} />
              } 
            /> */}

            <Route path='/viewbakes' 
              render={() => 
                <ViewBakesScreen 
                userId={this.state.userId} 
                bakes={this.state.bakes} 
                handleDelete={this.handleDelete} 
                handleNotePost={this.handleNotePost} 
                deleteNote={this.deleteNote}
                notePatchRequest={this.notePatchRequest}
                />
              } 
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
