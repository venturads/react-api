import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import _ from 'lodash';

//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios';

//url='https://rubygems.org/api/v1/search.json?query=cucumber';
//url="http://www.omdbapi.com";

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  componentWillMount(){
    var url = "https://rubygems.org/api/v1/search.json?query=cucumber";
    Request.get(url).then((response) => {
      this.setState({
       jobs: response
       
      });
    });
  }
  
  render() {
    var jobs = _.map(this.state.jobs, (jobs) => {
        return <li>{jobs.name}</li>;
    });
    return <div>
        <input ref="textBox" type="text" />
        <ul>{jobs}</ul>
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));