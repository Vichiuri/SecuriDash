import React, { useState } from 'react';
import { getContractDetails } from '../services/etherscan';
import styled from 'styled-components';

const ProtocolHealth: React.FC = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [contractDetails, setContractDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const details = await getContractDetails(contractAddress);
      setContractDetails(details);
    } catch (err) {
      setError('Unable to fetch contract details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter contract address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Check Contract'}
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {contractDetails && (
        <Details>
          <h3>Contract Name: {contractDetails[0]?.ContractName || 'N/A'}</h3>
          <p>Compiler Version: {contractDetails[0]?.CompilerVersion || 'N/A'}</p>
          <p>Is Optimized: {contractDetails[0]?.OptimizationUsed === '1' ? 'Yes' : 'No'}</p>
          <p>License Type: {contractDetails[0]?.LicenseType || 'N/A'}</p>
        </Details>
      )}
    </Container>
  );
};

export default ProtocolHealth;

// Styled Components
const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #61dafb;
  color: #282c34;
  border-radius: 5px;
  border: none;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Details = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;
