var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props){
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            	<h1>{props.header}</h1>
            	<div className="col-sm-12">
            		<form onSubmit={props.onSubmitUser}>
            			<div className="form-group">
            				<input 
            				className="form-control" 
            				type="text" 
            				placeholder="GitHub username" 
            				onChange={props.onUpdateUser}
            				value={props.user}
            				/>
            			</div>
            			<div className="form-group col-sm-4 col-sm-offset-4">
            				
							<button 
							className="btn btn-block btn-success" type="submit">
            					Continue
            				</button>
            			</div>
            		</form>
            	</div>
            </div>
        );
}

Prompt.PropTypes = {
	user: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt;