import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';

const Home: React.FC = () => {
  const { account, connectWallet, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await connectWallet();
    if (account) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <Title>Welcome to SecuriDash</Title>
      <Button onClick={handleLogin}>
        {account ? 'Connected: ' + account : 'Connect MetaMask'}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  background-color: #61dafb;
  color: #282c34;
  border-radius: 5px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;
