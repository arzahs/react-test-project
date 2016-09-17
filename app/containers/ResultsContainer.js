var React = require('react');
var Results = require('../components/Result');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState() {
	    return {
	        isLoading: true,
	        scores: []  
	    };
	},
	componentDidMount() {
	    // this.props.location.state.playersInfo  
	    githubHelpers.battle(this.props.location.state.playersInfo)
	    .then(function (scores){
	    	this.setState({
	    		scores: scores,
	    		isLoading: false
	    	})
	    }.bind(this))
	},
    render() {
        return (
           <Results 
           isLoading={this.state.isLoading}
           scores={this.state.scores} 
           playersInfo={this.props.location.state.playersInfo}
           />
        );
    }
});

module.exports = ResultsContainer;