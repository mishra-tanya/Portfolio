import React from "react";
import { Typography, useTheme, Box } from "@mui/material";

const About: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ maxWidth: "900px", margin: "auto"}}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main , textAlign:"center"}} gutterBottom>
                <b>About Me</b>
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: "20px",}}>
            Hi, I’m Tanya Mishra, a Full Stack Developer who’s passionate about building 
            impactful, user-friendly web applications. I’ve worked with a variety of 
            technologies like Laravel, Django, MySQL, React, and TypeScript, which has
             given me a strong, well-rounded skill set to tackle both front-end and back-end challenges.
<br />
<br />
I’m always learning and experimenting with new tools and frameworks,
 and I thrive in environments where collaboration and creativity come together.
  I enjoy taking on new challenges and am always excited to bring fresh ideas to life.
<br />
<br />
If you're looking to collaborate or have an idea you'd like to bring to life, feel free to reach out!
            </Typography>

        </Box>
    );
};

export default About;
