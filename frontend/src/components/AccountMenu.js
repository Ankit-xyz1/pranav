import React, { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const { currentRole, currentUser } = useSelector(state => state.user);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{
                            ml: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                            },
                        }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{
                            width: 34,
                            height: 34,
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            {String(currentUser.name).charAt(0)}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.1))',
                        mt: 1.5,
                        borderRadius: '12px',
                        border: '1px solid #f1f5f9',
                        minWidth: 200,
                        '& .MuiMenuItem-root': {
                            borderRadius: '6px',
                            mx: 0.5,
                            my: 0.25,
                            px: 2,
                            py: 1,
                            fontSize: '0.875rem',
                            fontFamily: "'Inter', sans-serif",
                            transition: 'background-color 150ms',
                            '&:hover': {
                                backgroundColor: '#f8fafc',
                            },
                        },
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1.5,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            borderLeft: '1px solid #f1f5f9',
                            borderTop: '1px solid #f1f5f9',
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to={`/${currentRole}/profile`}>
                    <Avatar sx={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                    }}>
                        {String(currentUser.name).charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#0f172a' }}>
                            {currentUser.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>
                            View profile
                        </Typography>
                    </Box>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" sx={{ color: '#64748b' }} />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem component={Link} to="/logout">
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: '#ef4444' }} />
                    </ListItemIcon>
                    <Typography sx={{ color: '#ef4444' }}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}

export default AccountMenu