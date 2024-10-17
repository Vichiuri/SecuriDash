import { BrowserProvider } from 'ethers';

const authUser = async () => {
  try {
    if ((window as any).ethereum) {
      const provider = new BrowserProvider((window as any).ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      return { account: address, error: null };
    } else {
      return { account: null, error: 'No Ethereum provider detected' };
    }
  } catch (error) {
    const errMessage = (error as Error).message;
    return { account: null, error: errMessage };
  }
};

export default authUser;
