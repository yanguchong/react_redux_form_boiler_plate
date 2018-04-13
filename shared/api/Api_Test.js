function getFetchConfig(){
    const myHeaders = new Headers();
    //myHeaders.append("x-api-key", "X-some-key");

    return {
        headers: myHeaders,
        mode: 'cors'
    };
}

function postData(url, data) {
    const temp = JSON.stringify(data);

	// Default options are marked with *
	return fetch(url, {
		body: temp, // must match 'Content-Type' header
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
	}).then(response => response.json()) // parses response to JSON
}

export function testApiCall(){
    return fetch("https://jsonplaceholder.typicode.com/posts/1", getFetchConfig()).then(resp => {

        return resp.json();
    });
}

export function submitForm(formData){

    if(typeof formData === 'undefined' || formData === null){
	    formData = {test: 'submitForm post has no data'};
    }

    //TODO: use location to determine base url
	return postData('http://localhost:3000/api/post-message', formData)
		.then(data => {
		    console.log(data);

		    return data;
		}) // JSON from `response.json()` call
		.catch(error => console.error(error));
}

export function validateUsername(value){

    //return false if no value is passed
	if(typeof value === 'undefined ' || value === null){
        //stay consistent in returning a promise
		return new Promise((resolve) => {
		    resolve(false);
        });
	}

	//TODO: use location to determine base url
	return postData('http://localhost:3000/api/async-validate-test', value)
		.then(data => {
			console.log(data);

			return data;
		}) // JSON from `response.json()` call
		.catch(error => console.error(error));
}
export function validatePassword(value){

    //return false if no value is passed
	if(typeof value === 'undefined ' || value === null){
        //stay consistent in returning a promise
		return new Promise((resolve) => {
		    resolve(false);
        });
	}

	//TODO: use location to determine base url
	return postData('http://localhost:3000/api/async-validate-test', value)
		.then(data => {
			console.log(data);

			return data;
		}) // JSON from `response.json()` call
		.catch(error => console.error(error));
}

export default {
    testApiCall: testApiCall,
    submitForm: submitForm,
	validateUsername: validateUsername,
	validatePassword: validatePassword
}
