import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import store from './store/configStore'

import Root from './containers/Root'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import IndexRedirect from './containers/IndexRedirect'
import Profile from './containers/Profile'
import Settings from './containers/Settings'
import Stock from './containers/Stock'
import NoMatch from './containers/NoMatch'

const authTransition = (nextState, replace, store) => {
  const { user } =  store.getState()
  if (!user.loggedIn) {
    return replace('/')
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Root}>
        <IndexRoute component={IndexRedirect} />
        <Route path='/settings' component={Settings} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />        
        <Route path='/symbol/:symbol' component={Stock} />
        <Route path='/user/:user' component={Profile} />
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('application')
)
