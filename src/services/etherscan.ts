import axios from 'axios';

const API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;
const BASE_URL = 'https://api.etherscan.io/api';

// Function to fetch contract details
export const getContractDetails = async (contractAddress: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${API_KEY}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching contract details:', error);
    throw error;
  }
};
