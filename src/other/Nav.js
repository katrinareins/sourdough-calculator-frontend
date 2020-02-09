import React, { Component } from 'react'
import '../App.css'
import { Link, Redirect } from 'react-router-dom'
import '../BakeCards.css'

export class Nav extends Component {

    state = {
        redirectHome: false
    }

    handleClick = () => {
        // event.preventDefault()
        this.props.handleLogOut()
        this.setState({
            redirectHome: true
        })
    }   

    render() {
        console.log('props in nav bar', this.props)

        if (this.state.redirectHome === true){
            return <Redirect to='/login' />
        }

        return (
            <div>
                {
                    // (this.props.loggedInUser) ?   
                    <div> 
                        <nav className='nav'>
                            <div>
                                <Link to='/'>
                                    <h3>Absolute Baking Success</h3>
                                </Link>

                                <Link to='/newBake'>
                                    <button className='button' >Create new bake</button>
                                </Link>

                                <Link to='/viewbakes'>
                                    <button className='button'>View my bakes</button>
                                </Link>

                                <button className='button'>Logged in as: {this.props.loggedInUser}</button>

                                <button className='button' onClick={this.handleClick}>Log out</button>
                            </div>
                        </nav>
                    </div>
                //     :
                //     <div>
                //     <nav className='nav-logged-out'>
                //         <Link to='/'>
                //             <h3>Absolute Baking Success</h3>
                //         </Link>
                //     </nav>
                // </div>
                }
            </div>
        )
    }
}

export default Nav

