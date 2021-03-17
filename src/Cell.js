import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
     this.setState({color: '#333'})
}


    render(){
        return( 
            <div className ="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
            </div>
        )
    }
}

export default Cell;


// 1) has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
// 2) has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
// 3) has an event listener that, when clicked, sets state's 'color' key to a value of '#333'