import {getFormSection} from "./getFormSection";

const getFormSections = (ids) => {
	const controls = ids.map(id=> {
		return getFormSection(id);
	});

	return controls;
};

export default getFormSections;
