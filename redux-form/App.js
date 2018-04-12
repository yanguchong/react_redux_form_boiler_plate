import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {debug} from './config';
import getFormSections from "./module/getFormSections";
import { Field, reduxForm } from 'redux-form';
import Actions, { fireAction } from './Actions';
import formStatus from './definition/formStatus';

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
    /*
    * onSubmit is not optional, contradictory to the documentation
    *
    * this will be called if the form is completely validated
    *
    * v = values
    * d = dispatch
    * p = props
    * */
    onSubmit: (v, d, p)=> {

        return new Promise((resolve)=> {
	        d({
		        type: Actions.FORM_SUBMITTED,
		        payload: v
	        });

	        /*
	        * inconsistent behavior, if you do not resolve, then you can not submit anymore after this
	        * function runs once. This may not be a bad thing though, since we consider the form submit a success
	        * and the user should be shown a thank you.  It also prevent resubmits.
	        *
	        * If you resolve, then you can continually submit.
	        *
	        * */
	        //resolve(true);
        });
    },
    /*
    * this will be called if the form fails validation
    *
    * e = errors
    * d = dispatch
    * se = submitError, the error object that caused the submission to fail
    * p = props
    * */
    onSubmitFail: (e, d, se, p) => {
	    console.log(e);
    }
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
