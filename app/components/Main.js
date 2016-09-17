var React = require('react');
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");
require("../app.css");


var Main = React.createClass({

	render: function() {
		return (
			<div className="main-container"> 
				<ReactCSSTransitionGroup 
					transitionName="appear" 
					transitionLeaveTimeout={500}
					transitionEnterTimeout={500}>
						{React.cloneElement(this.props.children, 
							{key: this.props.location.pathname})}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

module.exports = Main;