import React from 'react';
import ReactDOM from 'react-dom';

class Jobs extends React.Component {
  render() {
    const jobs = this.props.jobs;
    console.log(jobs);
    const formattedJobs = jobs.map((job) =>
      <ul key={job.id} class="well"> 
        <div class="company">{job.company_name}</div>
        <div class="title">{job.title}</div>
      </ul>
    );
    return(
      <div>{formattedJobs}</div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state={
      jobs:[]
    }
  var myUrl = "https://codepen.io/jobs.json";
  fetch(myUrl)
    .then((response) => response.json())
    .then((json) => this.setState({jobs: json.jobs}));
  }
  
  render() {
    return (
    <div className="app">
      <div className="header">
        <h1 id="header-title">Job Postings</h1>
      </div>
      <div className="content">
        <Jobs jobs={this.state.jobs}/>
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);