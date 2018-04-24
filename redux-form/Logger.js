import config from "./config";

export function debug(msg){
	if (!config.DEBUG){
		return;
	}

	if (typeof console === 'undefined' || console === null){
		return;
	}

	console.log(msg);
}