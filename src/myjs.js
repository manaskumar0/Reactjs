import React, { Component } from 'react';

class Newclass extends Component{
    render(){
        return (
            React.createElement(
                "div",
                { className: "shopping-list" },
                React.createElement(
                  "h1",
                  null,
                  "Shopping List for "
                ),
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    null,
                    "Instagram"
                  ),
                  React.createElement(
                    "li",
                    null,
                    "WhatsApp"
                  ),
                  React.createElement(
                    "li",
                    null,
                    "Oculus"
                  )
                )
              )
        );
    }
}
export default Newclass;
