import Section1 from '../section/Section1';
import LoginSection from '../section/LoginSection';
import React from "react";
import ThankYouSection from "../section/ThankYouSection";

export const getFormSection = (id) => {
	switch (id){
		case 1:
			return <LoginSection key={id} />;
		case 2:
			return <Section1 key={id} />;
		case 3:
			return <ThankYouSection key={id} />;
		default:
			return null;
	}
};

