import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
   super();

     this.state = {
         searchResults: []
     }
     this.search = this.search.bind(this);
 }
    showResults(response) {
     this.setState({
     searchResults: response.results
     })
    console.log(response)
    }
    search(URL) {
     $.ajax({
 type: "GET",
    dataType: 'jsonp',
    url: URL,
    success: function(response) {
    this.showResults(response);
    }.bind(this)
    });
 }

render() {
 return (
 <div>
        <SearchBox search={this.search}/>
            <Results searchResults={this.state.searchResults} />
    </div>
    )
 }
}

class SearchBox extends React.Component {
  createAjax(){
var query = ReactDOM.findDOMNode(this.refs.query).value;
var category = ReactDOM.findDOMNode(this.refs.category).value;
var URL = 'https://itunes.apple.com/search?term=' + query + '&country=us&entity=' + category;
    this.props.search(URL)

render() {
    return (
<div>
    <input type="text" ref="query"/>
        <select ref="category">
        <option value="software">Apps</option>
        <option value="movie">Films</option>
        </select>
    <input type="submit" onClick={this.createAjax.bind(this)} />
</div>
     )
 }
}

class Results extends React.Component {
     render() {
     var resultItems = this.props.searchResults.map((result) =>
    <ResultItem key={result.trackId} trackName={result.trackName} /> 
 )
 return (
     <div>
     <ul>
         {resultItems}
    </ul>
    </div>
   )
 }
}

class ResultItem extends React.Component {
 render() {
 return (
    <li>{this.props.trackName}</li>
     )
 }
}

ReactDOM.render(<App />, document.getElementById('app'));