function getFetchConfig(){
    const myHeaders = new Headers();
    //myHeaders.append("x-api-key", "X-some-key");

    return {
        headers: myHeaders,
        mode: 'cors'
    };
}

export function testApiCall(){
    return fetch("https://jsonplaceholder.typicode.com/posts/1", getFetchConfig()).then(resp => {

        return resp.json();
    });
}

export default {
    testApiCall: testApiCall
}
