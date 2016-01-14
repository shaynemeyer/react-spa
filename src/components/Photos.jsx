var React = require('react');
var PhotoItem = require('./PhotoItem.jsx');

var myPhotos = [
  {"key":1, "image": "pic1.png", "alt":"Pic1"},
  {"key":2, "image": "pic2.png", "alt":"Pic2"},
  {"key":3, "image": "pic3.png", "alt":"Pic3"},
  {"key":4, "image": "pic4.png", "alt":"Pic4"},
  {"key":5, "image": "pic5.png", "alt":"Pic5"},
  {"key":6, "image": "Pic6.png", "alt":"Pic6"},
  {"key":7, "image": "pic7.png", "alt":"Pic7"},
  {"key":8, "image": "pic8.png", "alt":"Pic8"},
  {"key":9, "image": "pic9.png", "alt":"Pic9"},
  {"key":10, "image": "pic10.png", "alt":"Pic10"},
  {"key":11, "image": "pic11.png", "alt":"Pic11"},
  {"key":12, "image": "pic12.png", "alt":"Pic12"}
];

var Photos = React.createClass({
  render: function(){
    var photoItems = myPhotos.map(function(item){
      return <PhotoItem image={item.image} alt={item.alt} />;
    });

    return (<div className="photos-box"><div>{photoItems}</div></div>);
  }
});

module.exports = Photos;
