import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LightPurpleButton } from '../components/buttonStyles';
import styled from 'styled-components';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const defaultTheme = createTheme({
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
});

const LoginPage = ({ role }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }

        else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = { email, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/dashboard');
            }
            else if (currentRole === 'Student') {
                navigate('/Student/dashboard');
            } else if (currentRole === 'Teacher') {
                navigate('/Teacher/dashboard');
            }
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, currentRole, navigate, error, response, currentUser]);

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
                            School Management
                            <br />
                            <Box component="span" sx={{
                                background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                System
                            </Box>
                        </Typography>
                        <Typography sx={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '1.05rem',
                            maxWidth: 400,
                            mx: 'auto',
                            lineHeight: 1.7,
                        }}>
                            Streamline operations, track performance, and manage your institution with ease.
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
                            py: 6,
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
                                {role} Portal
                            </Typography>
                            <Typography variant="h4" sx={{
                                fontWeight: 800,
                                color: '#0f172a',
                                letterSpacing: '-0.02em',
                                mb: 0.5,
                            }}>
                                Welcome back
                            </Typography>
                            <Typography sx={{
                                color: '#64748b',
                                fontSize: '0.9375rem',
                            }}>
                                Please enter your details to sign in
                            </Typography>
                        </Box>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            {role === "Student" ? (
                                <>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="rollNumber"
                                        label="Roll Number"
                                        name="rollNumber"
                                        autoComplete="off"
                                        type="number"
                                        autoFocus
                                        error={rollNumberError}
                                        helperText={rollNumberError && 'Roll Number is required'}
                                        onChange={handleInputChange}
                                        sx={textFieldStyle}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="studentName"
                                        label="Student Name"
                                        name="studentName"
                                        autoComplete="name"
                                        error={studentNameError}
                                        helperText={studentNameError && 'Name is required'}
                                        onChange={handleInputChange}
                                        sx={textFieldStyle}
                                    />
                                </>
                            ) : (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={emailError}
                                    helperText={emailError && 'Email is required'}
                                    onChange={handleInputChange}
                                    sx={textFieldStyle}
                                />
                            )}
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
                            <Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', mt: 0.5 }}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" sx={{ color: '#6366f1', '&.Mui-checked': { color: '#6366f1' } }} />}
                                    label={<Typography sx={{ fontSize: '0.875rem', color: '#64748b' }}>Remember me</Typography>}
                                />
                                <StyledLink href="#">
                                    Forgot password?
                                </StyledLink>
                            </Grid>
                            <LightPurpleButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, py: 1.4, fontSize: '0.9375rem' }}
                            >
                                {loader ?
                                    <CircularProgress size={24} color="inherit" />
                                    : "Sign In"}
                            </LightPurpleButton>
                            {role === "Admin" &&
                                <Box sx={{ textAlign: 'center', mt: 3 }}>
                                    <Typography sx={{ color: '#64748b', fontSize: '0.875rem' }}>
                                        Don't have an account?{' '}
                                        <StyledLink to="/Adminregister">
                                            Sign up
                                        </StyledLink>
                                    </Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </ThemeProvider>
    );
}

export default LoginPage

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
