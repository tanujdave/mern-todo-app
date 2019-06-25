import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import './index.css';

import Header from './components/Header'
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import AllTodos from './components/AllTodos';
import PendingTodos from './components/PendingTodos';
import InprogressTodos from './components/InprogressTodos';
import CompletedTodos from './components/CompletedTodos';

import * as serviceWorker from './serviceWorker';

const store = configureStore()

ReactDOM.render(
<div className="app">
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route 
            path="/" name="home"
            render={() => (
                <Fragment>
                    <div className="header">
                        <Header />
                        <AddTodo />
                        <Nav />
                    </div>
                    <main className="main">
                        <Switch>
                            <Route
                                path="/pending"
                                name="pendingList"
                                component={PendingTodos} />}
                            />
                            <Route
                                path="/inprogress"
                                name="inprogressList"
                                component={InprogressTodos} />}
                            />
                            <Route
                                path="/completed"
                                name="completedList"
                                component={CompletedTodos} />}
                            />
                            <Route
                                path="/"
                                name="allList"
                                component={AllTodos} />}
                            />
                        </Switch>
                    </main>
                </Fragment>
            )}
          />
          
        </Switch>
    </ConnectedRouter>
  </Provider>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
