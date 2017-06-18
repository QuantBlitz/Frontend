import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import store from './store/configStore'

import Root from './containers/Root'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import IndexRedirect from './containers/IndexRedirect'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
import Stock from './containers/Stock'
import Welcome from './containers/Welcome'
import NoMatch from './containers/NoMatch'

import { ga } from '../config.json'

ReactGA.initialize(ga)

const authTransition = (nextState, replace, store) => {
  const { user } =  store.getState()
  if (!user.loggedIn) {
    return replace('/')
  }
}

const analytics = ({ location }) => {
  ReactGA.set({ page: location.pathname + location.search })
  ReactGA.pageview(location.pathname)
  return null
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path='/' component={analytics} />
        <Switch>
          <Route exact path='/' component={IndexRedirect} />
          <Route path='/settings' component={Settings} />
          <Route path='/profile' component={Profile} />
          <Route path='/s/:symbol' component={Stock} />
          <Route path='/u/:user' component={Profile} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('application')
)
