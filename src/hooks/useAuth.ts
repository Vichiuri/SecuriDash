import { useState } from 'react';
import { ethers } from 'ethers';

const useAuth = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if ((window as any).ethereum) {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } else {
        setError('MetaMask is not installed. Please install it to use this feature.');
      }
    } catch (err) {
      setError('Failed to connect wallet. Try again.');
    }
  };

  return { account, connectWallet, error };
};

export default useAuth;
