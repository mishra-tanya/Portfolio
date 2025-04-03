import React from "react";
import TimelineStepper from "./common/TimelineStepper";
import { educationData } from "../data/EducationData";

const Education: React.FC = () => {
    return <TimelineStepper title="Education" items={educationData} />;
};

export default Education;
