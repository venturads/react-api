import React from 'react';
import ReactDOM from 'react-dom';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios';

//var url='https://rubygems.org/api/v1/search.json?query=cucumber';

class App extends React.Component{
    render() {
     return (
      <div>
        <Get url="https://codepen.io/jobs.json">
          {(error, response, isLoading) => {
            if(error) {
              return (<div>Something bad happened: {error.message}</div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (<div>{response.data.message}</div>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));
