import React, { Component } from 'react'
import RailsLogo from '../images/rails-logo.png'
import ReactLogo from '../images/react-logo.png'
import IGlogo from '../images/ig-logo.png'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div>
                        <img style={styles.logoRails} src={RailsLogo} alt=''></img>
                        <img style={styles.logoReact} src={ReactLogo} alt=''></img>
                    </div>

                    <div>
                        <h4></h4>

                    </div>

                    <div>
                        <p style={styles.photoCredit} >Photos by "A Foragers Bakehouse"</p>
                        <a style={styles.IGlink} href='https://www.instagram.com/a_foragers_bakehouse/?hl=en'>
                            <img style={styles.logoIG} src={IGlogo} alt=''></img>
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer

const styles = {
    logoRails: {
        width: '80px',
        margin: '15px'
    },
    logoReact: {
        width: '50px',
        margin: '15px'
    },
    photoCredit: {
        fontFamily: 'Noto Sans JP sans-serif',
        fontSize: '16px',
        marginTop: '15px'
    },
    logoIG: {
        width: '30px'
    },
    IGlink: {
        target: 'blank'
    }
}
