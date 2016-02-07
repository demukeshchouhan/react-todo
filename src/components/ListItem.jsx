var React = require("react");

var ListItem = React.createClass({
   render : function(){
      return(
         <li className="cust_list "><strong>{this.props.text}</strong></li>
      );
   }
});


module.exports = ListItem;
