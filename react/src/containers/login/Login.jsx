import React, { useContext } from 'react'
import { Navbar } from '../../components'
import UserContext from './UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './login.scss'
import Footer from '../footer/Footer'

// import { NavbarWithAuth } from '../../components'

function Login() {
  // const { isUserSignedIn, setIsUserSignedIn } = useContext(UserContext)

  const handleSignIn = () => {
    setIsUserSignedIn(true) // Set isUserSignedIn to true
  }

  return (
    <>
      <Navbar />
      <div className='sepp__login' id=''>
        <div className='sepp__login-card'>
          <div className='row'>
            {/* bootstrap css class */}
            <div className='col-md-6'>
              <div className='sepp__login-left_container'>
                <form className='sepp__login-form'>
                  <header>Kindly Log in</header>

                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='Email'
                      type='text'
                      id='email'
                      required
                    />
                  </div>

                  <div className='form-group items'>
                    <i className='fas fa-lock'></i>
                    <input
                      className='myInput'
                      type='password'
                      id='password'
                      placeholder='Password'
                      required
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <input
                        id='check_1'
                        name='check_1'
                        type='checkbox'
                        required
                      />
                      <small> Remember me</small>
                      <div className='invalid-feedback'>
                        You must check the box.
                      </div>
                    </label>
                  </div>

                  <input
                    type='submit'
                    className='button'
                    value='Login'
                    onSubmit={handleSignIn}
                  />
                  <div>
                    <a
                      href='#'
                      id='forget-password'
                      style={{ textDecoration: 'underline' }}
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className='sepp__login-signup'>
                    <button>
                      <Link to='/signup'>Create an account</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='sepp__login-right_container'>
                <div className='sepp__login-right_container-box'>
                  <header>Hi Seppie!</header>
                  <p>
                    That's what we call you. Are you ready to take the next step
                    in your career? Look no further than SEPP; a comprehensive
                    online resource dedicated to preparing candidates for
                    successful employment. <br />
                    At SEPP, we understand the challenges and complexities of
                    today's job market. That's why we've curated a wide range of
                    tools, resources, and expert guidance to help you navigate
                    every stage of the job search process with confidence and
                    competence.
                  </p>
                  <input type='button' value='Learn More' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
