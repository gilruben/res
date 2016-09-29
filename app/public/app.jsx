import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';

var App = React.createClass({
  render: function (){
    return <h1>Hello World</h1>
  }
})

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'));
