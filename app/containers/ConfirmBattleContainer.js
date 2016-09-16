var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
	    return {
	        isLoading: true,
	        playersInfo: []  
	    };
	},
	componentDidMount() {
	    var query = this.props.location.query;
	    console.log(query);  
	    //Fetch info from github

	},
    render() {
        return (
            <ConfirmBattle 
              isLoading={this.state.isLoading} 
              playersInfo={this.state.playersInfo}
            />
        );
    }
});

module.exports = ConfirmBattleContainer ;