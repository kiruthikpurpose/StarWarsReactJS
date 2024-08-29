import React from 'react';

class Item extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            clicks: 0, remaining: 2
        }
    }

    clickMe(){
        this.setState({
            clicks: this.state.clicks+1, remaining: this.state.remaining-1
        })
    }
    render(){
      return (
        <div>
            <h1 onClick={() => this.clickMe()}
            >Hi, this is {this.props.name}!</h1>
            <span>{this.state.clicks} is the numbers of times clicked - therefore {this.state.remaining} remaining</span>
        </div>
      )
    }
  }

  export default Item;

