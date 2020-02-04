import React, { Component } from 'react'

export class LoginScreen extends Component {

  state = {
    newUser: {
      email: '',
      password: ''
    }
  }

  handleInputChange = event => {
    let value = event.target.value
    let item = event.target.name
    this.setState(prevState => {
      return {
          newUser: {...prevState.newUser, [item]: value}
      }
  }, () => console.log('state after user login', this.state.newUser))
  }

  handleClick = () => {
    this.props.handleLogin(this.state.newUser)
  }

  render() {
    return (
      <div>
        <form>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => this.handleInputChange(e)}
            />

          <label>Password</label>
            <input
              name="password"
              type="text"
              placeholder="Enter your password"
              onChange={(e) => this.handleInputChange(e)}
            />      

            <button type="submit" onClick={this.handleClick} >
                Login
              </button>
        </form> 
      </div>
    )
  }
}

export default LoginScreen




// export default function LoginScreen(props) {

//   const onSubmit = (values) => {
//     props.handleSubmitProps(values)
//   }

//   return (
//     <div>
//       <form>

//       </form>
//     </div>
//   )
// }


{/* <Formik
  initialValues={{ email: "", password: "" }}
  
  onSubmit={values => handleSubmitProps(values)}
  
  validationSchema={Yup.object().shape({
    email: Yup.string()
    .email()
    .required("Required"),
    password: Yup.string()
    .required("No password provided.")
  })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}

            <button type="submit" disabled={isSubmitting} >
                Login
              </button>

          </form>
              <Link to='/viewbakes'>
                <button>Go to my bakes!</button>
              </Link>

        </div>
      );
    }}
  </Formik> */}