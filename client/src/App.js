import React, { useState } from 'react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [searchName, setSearchName] = useState('');
  const [message, setMessage] = useState('');
  const [foundUser, setFoundUser] = useState(null);

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user/addUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address }),
      });
      const data = await response.json();
      setMessage(data.description || 'User added successfully!');
      setName('');
      setAddress('');
    } catch (error) {
      setMessage('Error adding user');
    }
  };

  const findUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user/findUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: searchName }),
      });
      const data = await response.json();
      if (data.isSuccess && data.user) {
        setFoundUser(data.user);
        setMessage('');
      } else {
        setMessage('User not found');
        setFoundUser(null);
      }
    } catch (error) {
      setMessage('Error finding user');
      setFoundUser(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management System</h1>
      </header>

      <main className="App-main">
        <div className="form-container">
          <div className="form-card">
            <h2>Add New User</h2>
            <form onSubmit={addUser}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button type="submit">Add User</button>
            </form>
          </div>

          <div className="form-card">
            <h2>Find User</h2>
            <form onSubmit={findUser}>
              <input
                type="text"
                placeholder="Search by name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                required
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        {message && <div className="message">{message}</div>}

        {foundUser && (
          <div className="user-card">
            <h3>User Found</h3>
            <p><strong>Name:</strong> {foundUser.name}</p>
            <p><strong>Address:</strong> {foundUser.address}</p>
            <p><strong>ID:</strong> {foundUser._id}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
