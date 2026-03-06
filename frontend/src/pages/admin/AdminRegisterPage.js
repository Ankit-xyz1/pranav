import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LightPurpleButton } from '../../components/buttonStyles';
import { registerUser } from '../../redux/userRelated/userHandle';
import styled from 'styled-components';
import Popup from '../../components/Popup';

const defaultTheme = createTheme({
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
});

const AdminRegisterPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [adminNameError, setAdminNameError] = useState(false);
    const [schoolNameError, setSchoolNameError] = useState(false);
    const role = "Admin"

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.adminName.value;
        const schoolName = event.target.schoolName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!name || !schoolName || !email || !password) {
            if (!name) setAdminNameError(true);
            if (!schoolName) setSchoolNameError(true);
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            return;
        }

        const fields = { name, email, password, role, schoolName }
        setLoader(true)
        dispatch(registerUser(fields, role))
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'adminName') setAdminNameError(false);
        if (name === 'schoolName') setSchoolNameError(false);
    };

    useEffect(() => {
        if (status === 'success' || (currentUser !== null && currentRole === 'Admin')) {
            navigate('/Admin/dashboard');
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            console.log(error)
        }
    }, [status, currentUser, currentRole, navigate, error, response]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                {/* Left gradient panel */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '20%',
                            left: '10%',
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '10%',
                            right: '10%',
                            width: 250,
                            height: 250,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
                        },
                    }}
                >
                    <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: 6 }}>
                        <Typography variant="h3" sx={{
                            color: '#fff',
                            fontWeight: 800,
                            mb: 2,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                        }}>
                            Create Your
                            <br />
                            <Box component="span" sx={{
                                background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                School
                            </Box>
                        </Typography>
                        <Typography sx={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '1.05rem',
                            maxWidth: 400,
                            mx: 'auto',
                            lineHeight: 1.7,
                        }}>
                            Register as an admin to set up and manage your school's entire ecosystem.
                        </Typography>
                    </Box>
                </Grid>

                {/* Right form panel */}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fafbfc',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 420,
                            px: 4,
                            py: 5,
                        }}
                    >
                        <Box sx={{ mb: 1 }}>
                            <Typography sx={{
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: '#6366f1',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                mb: 1,
                            }}>
                                Admin Registration
                            </Typography>
                            <Typography variant="h4" sx={{
                                fontWeight: 800,
                                color: '#0f172a',
                                letterSpacing: '-0.02em',
                                mb: 0.5,
                            }}>
                                Get Started
                            </Typography>
                            <Typography sx={{
                                color: '#64748b',
                                fontSize: '0.9375rem',
                            }}>
                                Create your account to begin managing your school
                            </Typography>
                        </Box>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="adminName"
                                label="Your Name"
                                name="adminName"
                                autoComplete="name"
                                autoFocus
                                error={adminNameError}
                                helperText={adminNameError && 'Name is required'}
                                onChange={handleInputChange}
                                sx={textFieldStyle}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="schoolName"
                                label="School Name"
                                name="schoolName"
                                autoComplete="off"
                                error={schoolNameError}
                                helperText={schoolNameError && 'School name is required'}
                                onChange={handleInputChange}
                                sx={textFieldStyle}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={emailError}
                                helperText={emailError && 'Email is required'}
                                onChange={handleInputChange}
                                sx={textFieldStyle}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={toggle ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                error={passwordError}
                                helperText={passwordError && 'Password is required'}
                                onChange={handleInputChange}
                                sx={textFieldStyle}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setToggle(!toggle)} edge="end">
                                                {toggle ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" sx={{ color: '#6366f1', '&.Mui-checked': { color: '#6366f1' } }} />}
                                    label={<Typography sx={{ fontSize: '0.875rem', color: '#64748b' }}>Remember me</Typography>}
                                />
                            </Grid>
                            <LightPurpleButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, py: 1.4, fontSize: '0.9375rem' }}
                            >
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
                            </LightPurpleButton>
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography sx={{ color: '#64748b', fontSize: '0.875rem' }}>
                                    Already have an account?{' '}
                                    <StyledLink to="/Adminlogin">
                                        Sign in
                                    </StyledLink>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </ThemeProvider>
    );
}

export default AdminRegisterPage

const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        backgroundColor: '#fff',
        '& fieldset': {
            borderColor: '#e2e8f0',
        },
        '&:hover fieldset': {
            borderColor: '#6366f1',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6366f1',
            borderWidth: '1.5px',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#6366f1',
    },
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6366f1;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 200ms;

  &:hover {
    color: #4f46e5;
  }
`;
