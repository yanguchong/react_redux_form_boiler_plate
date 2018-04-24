import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import getFormSections from "./module/getFormSections";
import { reduxForm } from 'redux-form';
import formStatus from './definition/formStatus';
import onSubmit from './module/formEventHandlers/onSubmit';
import onSubmitFail from './module/formEventHandlers/onSubmitFail';
import asyncValidate from './module/validation/asyncValidate';

class App extends React.Component {
    constructor(props){
        super(props);
    };

    submit = (e)=> {
    	console.log('hello')
    };

    render(){

	    const { handleSubmit, submitting } = this.props;
        return(
            <form onSubmit={handleSubmit}>
	            {this.props.formStatus.current !== formStatus.SUCCESS &&
	                getFormSections([2, 1])
	            }
	            {this.props.formStatus.current !== formStatus.SUCCESS &&
		            <p><button type="submit" onClick={this.onSubmit} disabled={submitting}>Submit</button></p>
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
	onSubmitFail: onSubmitFail,
	asyncValidate: asyncValidate,
	// asyncBlurFields:['login.username', 'login.password']
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
