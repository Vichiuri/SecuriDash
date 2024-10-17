import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authUser from '../hooks/useAuth';  // Use the renamed function

const Home: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch account info when the component loads
  useEffect(() => {
    const fetchAccount = async () => {
      const { account, error } = await authUser();  // Call renamed function
      setAccount(account);
      setError(error);
    };

    fetchAccount();
  }, []);

  const handleLogin = async () => {
    if (account) {
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h1>Welcome to the Web3 Security App</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {account ? <p>Connected as: {account}</p> : <p>Please connect your wallet</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
