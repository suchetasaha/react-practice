import React from "react";
//props using class component//
export default class Class extends React.Component
{
    render(){
        return(
            <div>
                <h2>{this.props.text.name}</h2>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}
