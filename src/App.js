import React from 'react';
import './Styles.css';
// import Nav from './other/Nav'
// import Home from './other/Home'
import LoginScreen from './other/LoginScreen';
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
       email: '',
       password: '',
       bakes: [
        {
            id: '',
            user_id: '',
            total_flour_g: '',
            total_flour_p: '',
            water_g: '',
            water_p: '',
            salt_g: '',
            salt_p: '',
            leaven_g: '',
            leaven_p: '',
            hydration: '',
            rating: '',
            name: '',
            date: '',
            notes: [
            ]
          }
       ]
    }
  }

// patch request for new bake rating
handleRatingPatch = (bakeID, rating) => {
  console.log('Patch request received with bake ID and rating:', bakeID, rating)
}

// new note post request
handleNotePost = event => {
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(event)
      })
      .then(res => res.json())
      .then(data => { 

        let newBake = this.state.bakes.find(bake => bake.id === data.bake_id)
        newBake.notes.push(data)

        this.setState(prevState => {
          let newBakes = prevState.bakes.map(bake => {
            if(bake.id === data.bake_id){
              return newBake
            }else{
              return bake
            }
          })
          return {
            ...prevState,
            bakes: newBakes
          }
        })
      })
  }

    // note delete 
    deleteNote = noteToDelete => {
      console.log('Delete fetch request called with note info:', noteToDelete)
      fetch(`http://localhost:3000/notes/${noteToDelete.id}`, {
        method: "DELETE",
      })
      .then(res => res.json())
      // .then(data => { console.log('Data coming back from delete request: ', data)

        let newBake = this.state.bakes.find(bake => bake.id === noteToDelete.bake_id)
        let nonDeletedNotes = newBake.notes.filter(note => note.id !== noteToDelete.id)
        console.log('Non deleted notes: ', nonDeletedNotes)
        newBake.notes = nonDeletedNotes;
        
        this.setState(prevState => {
          let newBakes = prevState.bakes.map(bake => {
            if(bake.id === noteToDelete.bake_id){
              return newBake
            }else{
              return bake
            }
          })
          return {
            ...prevState,
            bakes: newBakes 
          }
        })
      // })
    }
  
    // note patch request
    notePatchRequest = values => {
      console.log('Note PATCH request:', values)
  
      fetch(`http://localhost:3000/notes/${values.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify(values)
          })
          .then(res => res.json())
          .then(data => { 

            let newBake = this.state.bakes.find(bake => bake.id === data.bake_id)
            let uneditedNotes = newBake.notes.filter(note => note.id !== data.id)
            newBake.notes = uneditedNotes;
            
            this.setState(prevState => {
              let newBakes = prevState.bakes.map(bake => {
                if(bake.id === data.bake_id){
                  return newBake
                }else{
                  return bake
                }
              })
              return {
                ...prevState,
                bakes: newBakes 
              }
            })

            newBake.notes.push(data)
    
            this.setState(prevState => {
              let newBakes = prevState.bakes.map(bake => {
                if(bake.id === data.bake_id){
                  return newBake
                }else{
                  return bake
                }
              })
              return {
                ...prevState,
                bakes: newBakes
              }
            })
          })
    }

  // handle login form submit
  handleLogin = (values) => {
    console.log('login values', values)
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => { 
          this.setCurrentUserData(data.id)
        })
  }

  // after login, get user details and update state
  setCurrentUserData = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(resp => resp.json())
    .then(data => { console.log('Data in fetch request with loggedin user id', data)
          this.setState({
            loggedIn: true,
            userId: data.id,
            email: data.email,
            password: data.password,
            bakes: data.bakes
      })
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
        }, () => console.log('new bake added, state is: ', this.state))
      })
  }

  // delete bake
  handleDelete = bakeID => {
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

  handleLogOut = () => {
    this.setState({
      loggedIn: false,
      userId: '',
      bakeId: '',
      email: '',
      password: '',
      bakes: [
       {
           id: '',
           user_id: '',
           total_flour_g: '',
           total_flour_p: '',
           water_g: '',
           water_p: '',
           salt_g: '',
           salt_p: '',
           leaven_g: '',
           leaven_p: '',
           hydration: '',
           rating: '',
           name: '',
           date: '',
           notes: []
         }
      ]
   })
  }
  
  render() {
    return (

          <div>

            <Router>
              <div>

                <Switch>
                  {/* {<Nav 
                  loggedInUser={this.state.email} 
                  handleLogOut={this.handleLogOut} />} */}

                  {/* <Route path='/' exact component={Home} /> */}

                  <Route 
                    path='/' exact  
                    render={() => 
                      <LoginScreen 
                      // loggedIn={!this.state.loggedIn}
                      handleLogin={this.handleLogin} 
                      alternate="/" exact />
                    } 
                    />

                  <Route path='/newBake'               
                  render={() => 
                      <NewBakeScreen 
                      handlePost={this.handlePost} 
                      userId={this.state.userId} 
                      redirectLogin={this.redirectLogin} 
                      date={this.state.date} 
                      loggedIn={this.state.loggedIn}
                      loggedInUser={this.state.email} 
                      handleLogOut={this.handleLogOut}
                      alternate="/" exact
                      />
                    }  
                    />

                  <Route path='/viewbakes' 
                    render={() => 
                      <ViewBakesScreen 
                      userId={this.state.userId} 
                      bakes={this.state.bakes} 
                      handleDelete={this.handleDelete} 
                      handleNotePost={this.handleNotePost} 
                      deleteNote={this.deleteNote}
                      notePatchRequest={this.notePatchRequest}
                      loggedIn={this.state.loggedIn}
                      loggedInUser={this.state.email} 
                      handleLogOut={this.handleLogOut}
                      handleRatingPatch={this.handleRatingPatch}
                      alternate="/" exact
                      />
                    } 
                  />

                </Switch>
              </div>
            </Router>
          </div>
    );
  }
}

export default App;


  // run in every route / most parent component (app)
  // component did mount
  // checkLocalStorage = () => {
  //   if(localStorage.getItem('loggedIn') === true){
  //     console.log('this local storage thing says the user is logged in')
  //     return true;
  //   }else{
  //     console.log('local storage says the user is NOT logged in.... :(', localStorage)
  //   }
  // }

    // componentWillMount() {
  //   let currentUserId = localStorage.getItem('id');
  //   console.log('who is logged in on component will mount', currentUserId)
  //   window.addEventListener('beforeunload', () =>{
  //     this.setCurrentUserData(currentUserId)
  //   });
  // }