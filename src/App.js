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
              // {
              //   id: '',
              //   bake_id: '',
              //   title: '',
              //   content: ''
              // }
            ]
          }
       ]
    }
  }

    // new note post request
    handleNotePost = event => {
      console.log('new note post request received with following data: ', event)
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify(event)
          })
          .then(res => res.json())
          .then(data => { console.log('data returned from note post request', data)
  
           console.log('state after note post', this.state)
           console.log('bakes: ', event)

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
           }, () => console.log('IS THIS WORKING???', this.state))
          })
        }
  
          //  let currentBakes = this.state.bakes
          //  currentBakes.map(bake => {
          //   if (bake.id === data.bake_id){
          //     console.log('THIS MAP FUNCTION FOUND MY ID: ', bake)
          //       this.setState(prevState => {
          //         return {
          //           // bakes: [...prevState.bakes[0].notes, data]
          //           bakes: [...prevState.bakes]
          //         }
          //       })
          // } 
          // })



        //    this.setState(prevState => {
        //      return {
        //       //  bakes: [...prevState.bakes[0].notes, data]
        //       bakes: this.newNoteHelper(...prevState.bakes, data)
               
        //       }
        //     })
        //     console.log('state after post request for new note', this.state.bakes)
        // })
        // this.setCurrentUserData(this.state.userId) 
  // }

    // newNoteHelper = (prev, obj) => {
    //   console.log('new note helper function input', prev, obj)
      
      // return temp
    // }

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
        .then(data => { console.log('data returned from user post request', data) 
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





  // note delete 
  deleteNote = noteID => {
    console.log('fetch request called with note ID:', noteID)
    fetch(`http://localhost:3000/notes/${noteID}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    this.setCurrentUserData(this.state.userId)
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
      this.setCurrentUserData(this.state.userId)
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
           notes: [
             {
               id: '',
               bake_id: '',
               title: '',
               content: ''
             }
           ]
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
                      loggedIn={this.state.loggedIn}
                      loggedInUser={this.state.email} 
                      handleLogOut={this.handleLogOut}
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