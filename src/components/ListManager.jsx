var React = require("react");
var List = require("./List.jsx");

var ListManager = React.createClass({
   getInitialState : function(){
      return {
         items : [],
         newItemText : ""
      };
   },
   handleChange : function(e){
      this.setState({
         newItemText : e.target.value
      });
   },
   handleSubmit : function(e){
      e.preventDefault();
         var currentItems = this.state.items;
         currentItems.push(this.state.newItemText);
         this.setState({
            items : currentItems,
            newItemText : ""
         });
   },
   render : function(){
      return(
         <div className="panel callout cust_app_panel">
            <h3>{this.props.title}</h3>
            <form onSubmit={this.handleSubmit} >
               <input type="text" onChange={this.handleChange} value={this.state.newItemText} />
               <button className="button small round primary">Add !</button>
            </form>
            <List items={this.state.items}/>
         </div>
      );
   }
});

module.exports = ListManager;
