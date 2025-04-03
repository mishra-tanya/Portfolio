import React, { useState } from "react";
import { Box, Grid, useMediaQuery, useTheme, Tabs, Tab } from "@mui/material";
import Sidebar from "../components/common/SideBar";
import { tabs } from "../data/Tabs";

const Layout: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const sidebarWidth = isMobile ? "100%" : "280px";

    const [activeTab, setActiveTab] = useState("about");

  
    return (
        <Grid container sx={{ height: "100vh", overflowY: "auto" }} spacing={2}>
            <Box sx={{ width: sidebarWidth, flexShrink: 0 }}>
                <Sidebar />
            </Box>

            <Box 
                sx={{
                    width: isMobile ? "90%" : `calc(100% - ${sidebarWidth})`, 
                    marginLeft: isMobile ? "5%" : `calc(10% + ${sidebarWidth})`,
                    marginRight: isMobile ? "5%" : "50px",
                    marginTop: isMobile ? "0%" : "35px",
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    padding: "20px",
                    height: "120vh",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: theme.shadows[1],
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        position: "sticky",
                        top: 0,
                        backgroundColor: theme.palette.background.paper,
                        zIndex: 10,
                    }}
                >
                    <Tabs 
                        value={activeTab} 
                        onChange={(_, newValue) => setActiveTab(newValue)}
                        textColor="primary" 
                        indicatorColor="primary" 
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            marginBottom:"20px",
                            display:"flex",
                            justifyContent:"center",
                            alignContent:"center"
                        }}
                    >
                        {tabs.map((tab) => (
                            <Tab key={tab.value} label={tab.label} value={tab.value} />
                        ))}
                    </Tabs>
                </Box>

                <Box 
                    sx={{
                        width: "100%",
                        padding: "10px",
                        flexGrow: 1,
                        overflowY: "auto",
                    }}
                >
                    {tabs.find((tab) => tab.value === activeTab)?.component}
                </Box>
            </Box>
        </Grid>
    );
};

export default Layout;
