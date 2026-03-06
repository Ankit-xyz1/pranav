import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #ef4444;
    color: white;
    margin-left: 4px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #dc2626;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #1e293b;
    color: white;
    margin-left: 4px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #334155;
      box-shadow: 0 4px 12px rgba(30, 41, 59, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #991b1b;
    color: white;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #b91c1c;
      box-shadow: 0 4px 12px rgba(153, 27, 27, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #3b82f6;
    color: #fff;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #2563eb;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #7c3aed;
    color: #fff;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #6d28d9;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: #fff;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-size: 0.9375rem;
    padding: 10px 24px;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.01em;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
      transform: translateY(-1px);
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #16a34a;
    color: #fff;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #15803d;
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #92400e;
    color: white;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #78350f;
      box-shadow: 0 4px 12px rgba(146, 64, 14, 0.3);
      transform: translateY(-1px);
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #4f46e5;
    color: white;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #4338ca;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
      transform: translateY(-1px);
    }
  }
`;
