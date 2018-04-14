import Api from '../../../shared/api/';
import validateUsername from './validateUsername';
import validatePassword from './validatePassword';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/*
* v = values
* d = redux dispatch
* p = props
* f = blurred field
 */
const asyncValidate = (v, d, p, f) => {
	// hold local reference to Api, makes it easier to debug
	const api = Api;

	if (f === 'login.username'){
		return new Promise((resolve) => validateUsername(v, p,resolve ));
	}

	if (f === 'login.password'){
		return new Promise((resolve) => validatePassword(v, p,resolve ));
	}

	//do nothing if field is not matched
	return new Promise((resolve)=> {resolve()});


	// return new Promise((resolve, reject)=> {
	//
	// 	let newErrors;
	//
	// 	if (f === "login.username") {
	//
	// 		if (p.asyncErrors) {
	// 			newErrors = {
	// 				login: {
	// 					...p.asyncErrors.login,
	// 					username: "username error"
	// 				}
	// 			};
	// 		}
	// 		else {
	// 			newErrors = {
	// 				login: {
	// 					username: "username error"
	// 				}
	// 			};
	// 		}
	// 	}
	// 	else {
	// 		if(p.asyncErrors) {
	// 			newErrors = {
	// 				login: {
	// 					...p.asyncErrors.login,
	// 					password: "password error"
	// 				}
	// 			};
	// 		}
	// 		else {
	// 			newErrors = {
	// 				login: {
	// 					password: "password error"
	// 				}
	// 			};
	// 		}
	// 	}
	//
	// 	resolve(newErrors);
	//
	// 	/* if no errors, return nothing*/
	// 	//resolve();
	// });

	// return sleep(1000).then(() => {
	// 	throw {"login.username" : "pseudo error"};
	// 	// simulate server latency
	// 	// if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
	// 	// 	throw { username: 'That username is taken' }
	// 	// }
	// })
};

export default asyncValidate;
