var React = require("react");

var Home = React.createClass ({
  render: function () {
    return (
      <div className="main-container">
        Hello from Main!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
