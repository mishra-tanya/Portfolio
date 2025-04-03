import React from "react";
import { Card, Typography, Grid, useTheme } from "@mui/material";
import { skills } from "../data/Skills";

const Skills: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Typography variant="h4" sx={{ textAlign: "center", color: theme.palette.primary.main, mb: 2 }}>
                <b>Skills</b>
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid  key={index} component="div"> {/* Added component="div" */}
                        <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Card 
                                sx={{ 
                                    textAlign: "center", 
                                    padding: "20px", 
                                    boxShadow: theme.shadows[1], 
                                    borderRadius: "10px",
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": { transform: "scale(1.05)" } 
                                }}
                            >
                                <img src={skill.logo} alt={skill.title} style={{ width: "190px", height: "150px"}} />
                            </Card>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Skills;
