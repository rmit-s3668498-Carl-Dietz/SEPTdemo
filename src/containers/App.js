import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import AdminServiceList from '../containers/AdminServicesContainer'


import Nav from '../components/Nav'
import About from '../components/About'
import Services from '../containers/ServicesContainer'
import ServiceDetailContainer from '../containers/ServiceDetailContainer'
import AdminAddServiceContainer from '../containers/AddServiceContainer'
// import Booking from '../components/Booking'

import CurrentUser from '../context/CurrentUser'
import AuthService from '../services/auth.service'

//Root Component

function App() {
  const [user, setUser] = useState(AuthService.getCurrentUser())

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({children, ...rest}) {
    return (
      <Route
        {...rest}
        render={({location}) =>
          true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: location},
              }}
            />
          )
        }
      />
    )
  }

 /* function LoginRoute({children, ...rest}) {
    return (
      // Show the component only when the user is logged in
      <Route {...rest} render={() => (user ? <Redirect to="/services" /> : children)} />
    )
  }*/

  //Routing list of major pages in application
  return (
    <Router>
      <CurrentUser.Provider value={[user, setUser]}>
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/add" exact component={AdminAddServiceContainer} />
          <Route path="/adminservices" exact component={AdminServiceList} />

          <PrivateRoute path="/">
            <Route path="/services" exact component={Services} />
            <Route path="/services/:targetId" component={ServiceDetailContainer} />
          </PrivateRoute>
        </Switch>
      </CurrentUser.Provider>
    </Router>
  )
}

export default App
