var React = require('react');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver(){
	return (
		<div className='col-sm-12'>
			<Link to='/playerOne'>
			  <button type='button' className='btn btn-lg btn-danger btn-margin'>Start over</button>
			</Link>
		</div>

		)
}


function Results(props){
	if(props.isLoading === true){
		return (
			<MainContainer>
				<Loading />
			</MainContainer>
			)
	}

	if(props.scores[0] === props.scores[1]){
		return (
				<MainContainer>
					<h1>It is a tie!</h1>
					<StartOver />
				</MainContainer>
			)
	}
	var winningIndex = (props.scores[0] > props.scores[1]) ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	
	return (
		<MainContainer>
			<h1>Results</h1>
			 <div className='col-sm-8 col-sm-offset-2'>
			    <UserDetailsWrapper header='Winner'>
            		<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          		</UserDetailsWrapper>
	      		<UserDetailsWrapper header='Loser'>
			      <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
			    </UserDetailsWrapper>
			 </div>
			<StartOver />
		</MainContainer>
		)
}

Results.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    score: React.PropTypes.array.isRequired
}

module.exports = Results;