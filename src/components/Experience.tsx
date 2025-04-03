import React from "react";
import { experienceData } from "../data/ExperienceData";
import TimelineStepper from "./common/TimelineStepper";

const Experience: React.FC = () => {
    return <TimelineStepper title="Experience" items={experienceData} />;
};

export default Experience;
