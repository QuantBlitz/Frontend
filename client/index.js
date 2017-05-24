import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'
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

const authTransition = (nextState, replace, store) => {
  const { user } =  store.getState()
  if (!user.loggedIn) {
    return replace('/')
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Root} />
        <Route path='/settings' component={Settings} />
        <Route path='/profile' component={Profile} />
        <Route path='/s/:symbol' component={Stock} />
        <Route path='/u/:user' component={Profile} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('application')
)
