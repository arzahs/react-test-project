var React = require('react');

function MainContainer (props) {
  return (
    <div className="jumbotron col-sm-12 text-center transparent">
      {props.children}
    </div>
  )
}

module.exports = MainContainer;