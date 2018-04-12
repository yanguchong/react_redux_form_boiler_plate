const isDebug = true;

export default {
    DEBUG: isDebug
}

export const debug = (title, msg) => {
	if (isDebug){
		console.log(title);
		console.log(msg);
	}
};

export const debugBlock = (f) => {
	if (isDebug){
		f();
	}
};