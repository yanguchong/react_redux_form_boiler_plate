import {debug} from "../../Logger";

export const validatePlain = (value, values, props, name) => {
	const isValid = false;

	debug("value: " + value);
	debug("values: " + JSON.stringify(values));
	debug("props: " + JSON.stringify(props));
	debug("name: " + JSON.stringify(name));

	return isValid ? undefined : "plain validate error";
};

