import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, handleUserProfile } from './firebase/utils'

// Layouts

import MainLayout from './layouts/MainLayout'

import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login';

import './default.scss';

const initialState = {
  currentUser: null
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      // If there is no logged in user, set the state to null

      this.setState({
        ...initialState
      })

    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">

        { /* Switch matches the first path that matches */ }
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            
            render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }  
};

export default App;