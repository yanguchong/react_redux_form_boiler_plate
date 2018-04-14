/*
* this will be called if the form fails validation
*
* e = errors
* d = dispatch
* se = submitError, the error object that caused the submission to fail
* p = props
* */
const onSubmitFail =  (e, d, se, p) => {
	return new Promise((resolve)=> {
		resolve(false);
	});
};

export default onSubmitFail;