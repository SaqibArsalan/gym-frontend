import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Box,
} from "@mui/material";
import {
    Dashboard,
    People,
    Settings,
    ExpandLess,
    ExpandMore,
    Logout,
} from "@mui/icons-material";
import styles from "./SideBar.module.scss";

const Sidebar: React.FC = () => {
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <Drawer
            variant="permanent"
            className={styles.sidebar}
            sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
            }}
        >
            <Box sx={{ mt: 2 }}>
                <List>
                    {/* Dashboard */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>

                    {/* Users */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>

                    {/* Settings (Collapsible) */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpenSettings(!openSettings)}>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                            {openSettings ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                    {/* Submenu - Settings */}
                    <Collapse in={openSettings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="General" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Security" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* Logout */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
