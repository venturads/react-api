import React from 'react';
import ReactDOM from 'react-dom';

class Jobs extends React.Component {
  render() {
    const jobs = this.props.jobs;
    console.log(jobs);
    const formattedJobs = jobs.map((job) =>
        <ul>
          <li key={job.id} className="well col-md-3"> 
            <a href={job.url} target="_blank">
              <div class="company">{job.company_name}</div>
              <div class="title">{job.title}</div>
              <div class="title">city</div>
            </a>
          </li>
        </ul>
    );
    return(
      <div className="row">{formattedJobs}</div>
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
      <div className="container">
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