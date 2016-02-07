var React = require("react");

var ListItem = React.createClass({
   render : function(){
      return(
         <li><strong>{this.props.text}</strong></li>
      );
   }
});


module.exports = ListItem;
