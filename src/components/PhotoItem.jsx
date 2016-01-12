var React = require('react');
var PhotoItem = React.createClass({
  render: function() {

    return (
      <div className="col-sm-3">
        <img src={`images/photos/${this.props.image}`} alt={this.props.alt} width='200' />
      </div>
    )
  }
});

module.exports = PhotoItem;
