import React from "react";
import { Switch, Route } from 'react-router-dom';

// Layouts

import MainLayout from './layouts/MainLayout'

import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';

import './default.scss';

export default function App() {

  return (
    <div className="App">
      {/* Switch matches the first path that matches */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
                <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};
