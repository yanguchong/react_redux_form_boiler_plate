import Actions from '../Actions'
/*
* onSubmit is not optional, contradictory to the documentation
*
* this will be called if the form is completely validated
*
* v = values
* d = dispatch
* p = props
* */
const onSubmit = (v, d, p) => {

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
};

export default onSubmit;