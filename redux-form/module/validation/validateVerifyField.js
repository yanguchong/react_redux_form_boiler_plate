import {debug} from "../../Logger";


// const validate = (section, field) => (value, values, props, name) => {
//
// 	debug("value: " + value);
// 	debug("values: " + JSON.stringify(values));
// 	debug("props: " + JSON.stringify(props));
// 	debug("name: " + JSON.stringify(name));
//
// 	const error = "Field must match '" + field + '"';
//
// 	if (!values[section] || !values[section][field]) {
// 		error;
// 	}
//
// 	values[section][field] === value ? undefined : error;
// };
const validate = (section, field) => (value, values, props, name) => field === 'test' ? undefined : "error";

export default validate;