import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components';

const Logout = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
    navigate('/');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <LogoutContainer>
      <LogoutCard>
        <LogoutIcon>👋</LogoutIcon>
        <LogoutTitle>See you later, {currentUser.name}!</LogoutTitle>
        <LogoutMessage>Are you sure you want to log out of your account?</LogoutMessage>
        <ButtonGroup>
          <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
          <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
        </ButtonGroup>
      </LogoutCard>
    </LogoutContainer>
  );
};

export default Logout;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
`;

const LogoutCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 48px 40px;
  text-align: center;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
`;

const LogoutIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const LogoutTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const LogoutMessage = styled.p`
  color: #64748b;
  font-size: 0.9375rem;
  margin-bottom: 32px;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const LogoutButton = styled.button`
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: 'Inter', sans-serif;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;

  &:hover {
    box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
  }
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background: #f1f5f9;
  color: #475569;

  &:hover {
    background: #e2e8f0;
  }
`;
