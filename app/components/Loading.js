var React = require('react');
var MainContainer = require('./MainContainer')

var Loading = React.createClass({
	propTypes: {
	    speed: React.PropTypes.number,
	    text: React.PropTypes.string
	},
	getDefaultProps() {
	    return {
	       text: "Loading",
	       speed: 300
	    };
	},
	getInitialState() {
		this.originalText = this.props.text;
	    return {
	        text: this.props.text
	    };
	},
	componentDidMount() {
	    var stopper = this.originalText+"...";
	    this.interval = setInterval(function(){
	    	if (this.state.text === stopper){
	    		this.setState({
	    			text: this.originalText
	    		});
	    	}else{
	    		this.setState({
	    			text: this.originalText + '.'
	    		});
	    	}
	    }.bind(this), this.props.speed);
	},
	componentWillUnmount() {
	    clearInterval(this.interval);
	},
	render: function(){
		return (
			<MainContainer>
				<h1>{this.state.text}</h1>
			</MainContainer>
		);
	}
});


module.exports = Loading;