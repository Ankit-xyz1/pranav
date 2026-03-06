import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const activeStyle = {
    backgroundColor: 'rgba(99, 102, 241, 0.12)',
    borderRight: '3px solid #6366f1',
    color: '#a5b4fc',
    '& .MuiListItemIcon-root': {
        color: '#a5b4fc',
    },
};

const itemStyle = {
    borderRadius: '0',
    py: 1.2,
    px: 2.5,
    mb: 0.25,
    color: '#94a3b8',
    transition: 'all 150ms ease',
    '&:hover': {
        backgroundColor: 'rgba(99, 102, 241, 0.08)',
        color: '#c7d2fe',
        '& .MuiListItemIcon-root': {
            color: '#c7d2fe',
        },
    },
    '& .MuiListItemIcon-root': {
        color: '#64748b',
        minWidth: 40,
    },
    '& .MuiListItemText-primary': {
        fontSize: '0.875rem',
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
    },
};

const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton
                    component={Link}
                    to="/"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname === '/' || location.pathname === '/Admin/dashboard' ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/classes"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/classes') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <ClassOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Classes" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/subjects"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/subjects') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/teachers"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/teachers') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Teachers" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/students"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/students') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/notices"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/notices') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notices" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/Admin/complains"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/complains') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Complains" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1.5, borderColor: 'rgba(99, 102, 241, 0.08)' }} />
            <React.Fragment>
                <ListSubheader component="div" inset sx={{
                    backgroundColor: 'transparent',
                    color: '#475569',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: '32px',
                }}>
                    Account
                </ListSubheader>
                <ListItemButton
                    component={Link}
                    to="/Admin/profile"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/Admin/profile') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="/logout"
                    sx={{
                        ...itemStyle,
                        ...(location.pathname.startsWith('/logout') ? activeStyle : {}),
                    }}
                >
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    )
}

export default SideBar
