import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import Header from './components/Header/index';
import Homepage from './pages/Homepage/index';

import './default.scss';

export default function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Homepage />
      </main>
    </div>
  );
};
