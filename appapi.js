import React from 'react';
import ReactDOM from 'react-dom';

class ItemLister extends React.Component {
    constructor(){
        super();
        this.state={};
    }
    componentWillMount(){
        var url="https://rubygems.org/api/v1/search.json?query=cucumber";
        Request.get(url).then((reponse)=>{
            this.setState({
                infos:response.body.Search,
                total:response.body.totalResults
            });
        });
    }

    render(){
        var infos=_.map(this.state.infos, (info)=>{
            return <li>{info.name}</li>;
        });

        return(
        <div>
        <ul> {infos}</ul>

        </div>
        )
    }

}

ReactDOM.render(<ItemLister />,document.getElementById('app'));