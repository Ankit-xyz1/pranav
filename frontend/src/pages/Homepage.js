import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <HeroWrapper>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <IllustrationWrapper>
                            <img src={Students} alt="students" style={{ width: '100%', maxWidth: 500 }} />
                        </IllustrationWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentCard>
                            <Badge>School Management System</Badge>
                            <HeroTitle>
                                Manage Your
                                <GradientText> School </GradientText>
                                Effortlessly
                            </HeroTitle>
                            <HeroDescription>
                                Streamline school management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </HeroDescription>
                            <ButtonGroup>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Get Started
                                    </LightPurpleButton>
                                </StyledLink>
                                <SignupText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{ color: '#6366f1', fontWeight: 600 }}>
                                        Sign up
                                    </Link>
                                </SignupText>
                            </ButtonGroup>
                        </ContentCard>
                    </Grid>
                </Grid>
            </Container>
        </HeroWrapper>
    );
};

export default Homepage;

const HeroWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 40px;
  animation: fadeInUp 0.8s ease-out 0.15s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.02em;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 32px;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SignupText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  text-align: center;
`;
