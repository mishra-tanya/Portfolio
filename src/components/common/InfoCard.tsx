import React from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
    const theme = useTheme();

    return (
        <Card sx={{ boxShadow: theme.shadows[3], borderRadius: "10px", padding: "20px", height: "100%" }}>
            <CardContent>
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, marginBottom: "10px" }}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
