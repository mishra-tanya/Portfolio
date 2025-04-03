import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, useMediaQuery, useTheme } from "@mui/material";
import { projects } from "../data/Project";

const Projects: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ padding: "1px" }}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main, textAlign: "center" }} gutterBottom>
                <b>Projects</b>
            </Typography>

            {projects.map((project, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : index % 2 === 0 ? "row-reverse" : "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "50px",
                        gap: "5px",
                    }}
                >
                    <Card sx={{ width: isMobile ? "100%" : "50%", height:isMobile ? "300px" :  "250px", display: "flex" }}>
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Card>

                    <Card sx={{ width: isMobile ? "100%" : "50%", padding: "10px", height:isMobile ? "300px" :  "250px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                            <Button href={project.link} target="_blank" sx={{ marginTop: "10px" }}>View Project</Button>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default Projects;
