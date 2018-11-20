import React, { Component } from 'react';
import Main from './Main';
import { LocalizeProvider } from 'react-localize-redux';

const App = props => (
  <LocalizeProvider>
    <Main />
  </LocalizeProvider>
);

export default App;
