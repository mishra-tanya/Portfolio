import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { contacts } from "../data/AboutData";

const Contact: React.FC = () => {
    return (
        <Box sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                Contact Me
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {contacts.map((contact, index) => (
                    <Card key={index} sx={{ width: "200px", textAlign: "center", padding: "10px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <IconButton component="a" href={contact.link} target="_blank" sx={{ color: "primary.main" }}>
                                {contact.icon}
                            </IconButton>
                            <Typography variant="h6">{contact.name}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Contact;
