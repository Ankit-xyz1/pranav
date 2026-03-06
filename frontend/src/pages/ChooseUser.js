import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  Container,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group, ArrowForward } from '@mui/icons-material';
import styled from 'styled-components';

const ChooseUser = () => {
  const navigate = useNavigate()

  const navigateHandler = (user) => {
    if (user === "Admin") {
      navigate('/Adminlogin');
    } else if (user === "Student") {
      navigate('/Studentlogin');
    } else if (user === "Teacher") {
      navigate('/Teacherlogin');
    }
  }

  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Badge>Select Your Role</Badge>
          <PageTitle>How would you like to sign in?</PageTitle>
          <PageSubtitle>Choose your role to access the appropriate portal</PageSubtitle>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <RoleCard onClick={() => navigateHandler("Admin")}>
              <IconWrapper color="#6366f1">
                <AccountCircle sx={{ fontSize: 32 }} />
              </IconWrapper>
              <RoleTitle>Admin</RoleTitle>
              <RoleDescription>
                Access the full dashboard to manage students, faculty, and school operations.
              </RoleDescription>
              <CardArrow>
                <ArrowForward sx={{ fontSize: 18 }} />
              </CardArrow>
            </RoleCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RoleCard onClick={() => navigateHandler("Student")}>
              <IconWrapper color="#0ea5e9">
                <School sx={{ fontSize: 32 }} />
              </IconWrapper>
              <RoleTitle>Student</RoleTitle>
              <RoleDescription>
                View course materials, check attendance, grades, and submit assignments.
              </RoleDescription>
              <CardArrow>
                <ArrowForward sx={{ fontSize: 18 }} />
              </CardArrow>
            </RoleCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RoleCard onClick={() => navigateHandler("Teacher")}>
              <IconWrapper color="#8b5cf6">
                <Group sx={{ fontSize: 32 }} />
              </IconWrapper>
              <RoleTitle>Teacher</RoleTitle>
              <RoleDescription>
                Manage classes, create assignments, and track student progress.
              </RoleDescription>
              <CardArrow>
                <ArrowForward sx={{ fontSize: 18 }} />
              </CardArrow>
            </RoleCard>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default ChooseUser;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: 5%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 6px 18px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 16px;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-size: 1.05rem;
`;

const RoleCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 36px 28px;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15);
  }

  &:hover > div:last-child {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background: ${props => props.color ? `${props.color}20` : 'rgba(99,102,241,0.12)'};
  color: ${props => props.color || '#6366f1'};
  transition: all 300ms;

  ${RoleCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.color ? `${props.color}30` : 'rgba(99,102,241,0.2)'};
  }
`;

const RoleTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const RoleDescription = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const CardArrow = styled.div`
  color: #a5b4fc;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 300ms;
`;