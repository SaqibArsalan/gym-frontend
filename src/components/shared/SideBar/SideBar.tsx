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
    Logout, Group, FitnessCenter, CardMembership, Payment,
} from "@mui/icons-material";
import {Link} from "react-router-dom";
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
                    {/* MembersPage */}
                    <ListItemButton component={Link} to="/dashboard">
                        <ListItemIcon><Dashboard /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/users">
                        <ListItemIcon><Group /></ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/memberships">
                        <ListItemIcon><CardMembership /></ListItemIcon>
                        <ListItemText primary="Memberships" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/staff">
                        <ListItemIcon><Group /></ListItemIcon>
                        <ListItemText primary="Staff" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/classes">
                        <ListItemIcon><FitnessCenter /></ListItemIcon>
                        <ListItemText primary="Classes & Attendance" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/payments">
                        <ListItemIcon><Payment /></ListItemIcon>
                        <ListItemText primary="Payments" />
                    </ListItemButton>

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
