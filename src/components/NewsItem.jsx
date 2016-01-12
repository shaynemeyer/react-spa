var React = require('react');
var NewsItem = React.createClass({
  render: function() {

    return (
      <div className="content-box">
        <div className="row">
          <div className="col-sm-1">
            <img src={`images/${this.props.image}`} />
          </div>
          <div className="content-box-body col-sm-8">
            <div className="title">
              {this.props.title}
            </div>
            <div className="alt-title">
              {this.props.subtitle}
            </div>
            <div className="text">
              {this.props.text}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = NewsItem;
