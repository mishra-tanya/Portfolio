import React, { useContext, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  IconButton,
  useMediaQuery,
  Theme,
  Box,
} from "@mui/material";
import { LocationCity, Phone, EmailOutlined, Brightness4, Brightness7 } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from "../../context/ThemeContext";

const Sidebar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  if (!themeContext) {
    throw new Error("Sidebar must be used within a ThemeContextProvider");
  }

  const { toggleTheme, themeMode } = themeContext;

  const menuItems = [
    { text: "Email", icon: <EmailOutlined />, value: "tanyamishra1909@gmail.com", link: "mailto:tanyamishra1909@gmail.com" },
    { text: "Contact", icon: <Phone />, value: "7737718414" },
    { text: "Location", icon: <LocationCity />, value: "Bhiwadi, Rajasthan" },
  ];

  const drawerContent = (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Avatar
          src="https://via.placeholder.com/100"
          sx={{ width: 80, height: 80, margin: "auto" }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Tanya Mishra
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack Developer
        </Typography>
        <IconButton onClick={toggleTheme} sx={{ mt: 2 }}>
          {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{ borderRadius: "10px", margin: "5px 0" }}
            component={item.link ? "a" : "div"}
            href={item.link}
            target={item.link ? "_blank" : undefined}
          >
            <ListItemIcon sx={{ color: "text.primary" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ color: "text.primary" }}>
                  {item.text}
                </Typography>
              }
              secondary={
                <Typography sx={{ color: "text.secondary", textDecoration: "none" }}>
                  {item.value}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isMobile && (
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" ,paddingInline:"30px"}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography sx={{ textAlign: "end" }}>
        Tanya Mishra
      </Typography>
    </Box>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 330,
            margin: isMobile ? "0px":"50px",
            backgroundColor: "background.paper",
            color: "text.primary",
            boxSizing: "border-box",
            padding: "10px",
            borderRadius: isMobile ? "0px" : "20px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
