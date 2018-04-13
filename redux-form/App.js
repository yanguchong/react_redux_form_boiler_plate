import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import getFormSections from "./module/getFormSections";
import { reduxForm } from 'redux-form';
import { fireAction } from './Actions';
import formStatus from './definition/formStatus';
import onSubmit from './module/onSubmit';
import onSubmitFail from './module/onSubmitFail';

class App extends React.Component {
    constructor(props){
        super(props);
    };

    render(){

	    const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
	            {this.props.formStatus.current !== formStatus.SUCCESS &&
	                getFormSections([2, 1])
	            }
	            {this.props.formStatus.current !== formStatus.SUCCESS &&
		            <p><button type="submit" onClick={this.onSubmit}>Submit</button></p>
	            }
                {this.props.formStatus.current === formStatus.SUCCESS &&
	                getFormSections([3])
	            }
            </form>
        )
    }
}

App = reduxForm({
	form: 'app',
	onSubmit: onSubmit,
	onSubmitFail: onSubmitFail
})(App);

function mapDispatchToProps(dispatch, ownProps){
    return {
        dispatch:dispatch
    }
}

function mapStateToProps(state, ownProps){
    return {
        formStatus: state.main.submitStatus
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
