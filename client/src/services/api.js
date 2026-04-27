const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

export const api = {
  // Add two numbers
  addTwoNumber: async (numberA, numberB) => {
    const response = await fetch(`${API_BASE_URL}/user/addTwoNumber`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numberA, numberB }),
    });
    return response.json();
  },

  // Add user
  addUser: async (name, address) => {
    const response = await fetch(`${API_BASE_URL}/user/addUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, address }),
    });
    return response.json();
  },

  // Find user
  findUser: async (name) => {
    const response = await fetch(`${API_BASE_URL}/user/findUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    return response.json();
  },

  // Get API info
  getApiInfo: async () => {
    const response = await fetch(`${API_BASE_URL}/`);
    return response.json();
  },
};
