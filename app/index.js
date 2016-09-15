// var USER_DATA = {
// 	name: "Sergey Nelepa",
// 	username: "arzahs",
// 	image: "https://avatars0.githubusercontent.com/u/11315965?v=3&s=466"
// }

var React = require('react');
var ReactDOM = require('react-dom');
var raven = require('raven-js');


// var ProfilePic = React.createClass({

//     render() {
//         return (
//             <img src={this.props.imageUrl} alt="profile image" />
//         );
//     }
// });

// var Link = React.createClass({
// 	changeURL: function(){
// 		window.location.replace(this.props.href)
// 	},
//     render: function() {
//         return (
//             <span 
//             style={{color: "blue", cursor: "pointer"}}
//             onClick={this.changeURL}
//             >
//             	{this.props.children}
//             </span>
//         );
//     }
// });

// var ProfileLink = React.createClass({

//     render() {
//         return (
//         	<div>
//             	<Link href={"https://github.com/"+ this.props.username } >
//             		{this.props.username}
//             	</Link>
//         	</div>
//         );
//     }
// });

// var ProfileName = React.createClass({
    
//     render() {
//         return (
//             <div>{this.props.name}</div>
//         );
//     }

// });

// var React = require('react');

// var Avatar = React.createClass({

//     render() {
//         return (
//             <div>
//             	<ProfilePic imageUrl={this.props.user.image} />
//             	<ProfileName name={this.props.user.name} />
//             	<ProfileLink username={this.props.user.username} />
//             </div>
//         );
//     }
// });

var routes = require('./config/routes');

sentryKey = '49f11be2dd8a4472b05b29e4281db174';
sentryApp = '99197';
sentryUrl = 'https://' + sentryKey + "@sentry.io/" + sentryApp;

raven.config(sentryUrl).install();


ReactDOM.render(
	routes,
	document.getElementById('app')
);