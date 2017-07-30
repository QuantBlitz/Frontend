import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

import store from './store/configStore'

import Root from './containers/Root'
import Dashboard from './containers/Dashboard'
import IndexRedirect from './containers/IndexRedirect'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
import Stock from './containers/Stock'
import Welcome from './containers/Welcome'
import NoMatch from './containers/NoMatch'

import { ga } from '../config.json'

ReactGA.initialize(ga)

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

const isAuthenticated = () => store.getState().auth.loggedIn

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
    )} />
  )
}

const analytics = ({ location }) => {
  ReactGA.set({ page: location.pathname + location.search })
  ReactGA.pageview(location.pathname)
  return null
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route component={analytics} />
        <Switch>
          <Route exact path='/' component={IndexRedirect} />
          <Route path='/settings' component={Settings} />
          <Route path='/profile' component={Profile} />
          <Route path='/s/:symbol' component={Stock} />
          <Route path='/u/:user' component={Profile} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('application')
)
