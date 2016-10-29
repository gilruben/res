import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';

// components
import Header from './components/header';
import MainSection from './components/mainSection';

// css
// import './css/App.css';

var App = React.createClass({
  render: function (){
    return (
      <div className="mainApp">
        <Header />
        <MainSection />
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'));
