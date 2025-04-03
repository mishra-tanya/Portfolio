import React from "react";
import { ReactNode } from 'react';
import { Typography, Box, Stepper, Step, StepLabel, StepContent, useTheme } from "@mui/material";

type DescriptionType = string | ReactNode;
interface TimelineItem {
    title: string;
    subtitle: string;
    duration: string;
    description: DescriptionType;
}

interface TimelineStepperProps {
    title: string;
    items: TimelineItem[];
}

const TimelineStepper: React.FC<TimelineStepperProps> = ({ title, items }) => {
    const theme = useTheme();

    return (
        <>
         <Typography variant="h4" sx={{ color: theme.palette.primary.main, textAlign: "center"  }} gutterBottom>
                <b>{title}</b>
            </Typography>
        <Box sx={{ maxWidth: "700px", margin: "auto", textAlign: "" }}>
           

            <Stepper orientation="vertical">
                {items.map((item, index) => (
                    <Step key={index} active>
                        <StepLabel>
                            <Typography variant="h6">{item.title}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{item.subtitle}</Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>{item.duration}</Typography>
                            <Typography variant="body2">{item.description}</Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>

        </Box>
        </>
    );
};

export default TimelineStepper;
