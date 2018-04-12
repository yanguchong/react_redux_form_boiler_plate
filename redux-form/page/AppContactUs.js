import React from 'react';
import {connect} from 'react-redux';
import {helloWorld} from '../Actions';

class App extends React.Component {
    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked = (e) => {
        this.props.dispatch(helloWorld(e.target.value));
    };

    render(){
        return(
            <div>
                <fieldset>
                    <legend>Hello World - Contact Us</legend>
                    <p><span>Hello World: </span> {this.props.helloWorld}</p>
                    <p><button onClick={this.buttonClicked} value='Button Clicked!!!'>Click Me!!!</button></p>
                </fieldset>
                <fieldset>
                    <legend>Param1</legend>
                    <p><span>Param1: </span> {this.props.param1}</p>
                </fieldset>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch, ownProps){
    return {
        dispatch:dispatch
    }
}

function mapStateToProps(state, ownProps){
    return {
        helloWorld: state.main.message,
        param1: state.main.param1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
