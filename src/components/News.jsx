var React = require('react');
var NewsItem = require('./NewsItem.jsx');

var news = [
  {"key":1, "image": "example-pic-1.png", "title":"Obesity in America", "subtitle":"Why are Americans so fat? ", "text":"Before they sold out photo booth ethical, mlkshk single-origin coffee chicharrones austin semiotics post-ironic dreamcatcher plaid squid. Tacos four loko tattooed forage, wolf food truck williamsburg four dollar toast mustache pour-over semiotics meggings humblebrag. Blog church-key godard locavore. Pabst pour-over kombucha slow-carb. Shoreditch distillery gastropub fanny pack, butcher echo park you probably haven't heard of them cold-pressed irony disrupt tousled banh mi vegan wolf craft beer. Etsy cornhole franzen, swag selvage typewriter PBR&B literally schlitz intelligentsia chillwave pickled celiac. Pabst kombucha marfa polaroid, tacos affogato four dollar toast paleo fashion axe."},
  {"key":2, "image": "example-pic-2.png", "title":"Intollerance in America", "subtitle":"Why are Americans so racist? ", "text":"Food truck tattooed distillery, organic cornhole typewriter pork belly franzen actually flannel. Small batch single-origin coffee XOXO blog williamsburg. Slow-carb raw denim squid bicycle rights thundercats photo booth. Everyday carry 3 wolf moon church-key retro quinoa, cred craft beer banjo. Pickled crucifix messenger bag waistcoat, literally sriracha ennui seitan. Try-hard cliche mumblecore, dreamcatcher tofu art party cronut lomo everyday carry paleo waistcoat humblebrag banjo VHS. Kickstarter forage umami, taxidermy twee sustainable PBR&B before they sold out master cleanse XOXO craft beer helvetica mustache deep v neutra."},
  {"key":3, "image": "example-pic-1.png", "title":"Turtles in Hawaii", "subtitle":"Why are sea turtles green? ", "text":"90's deep v lomo, synth 8-bit wayfarers echo park artisan knausgaard. Blog four loko mixtape, everyday carry 8-bit direct trade distillery williamsburg keffiyeh. DIY salvia XOXO williamsburg yuccie put a bird on it. Pickled disrupt wayfarers normcore gastropub locavore, narwhal raw denim vice. Tousled meggings everyday carry dreamcatcher post-ironic. Pork belly sriracha meh yr swag. Portland selvage fingerstache selfies art party everyday carry fanny pack."}
];

var News = React.createClass({
  render: function(){
    var newsItems = news.map(function(item){
      return <NewsItem image={item.image} title={item.title} subtitle={item.subtitle} text={item.text} />;
    });

    return (<div>{newsItems}</div>);
  }
});

module.exports = News;
