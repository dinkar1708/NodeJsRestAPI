import React, { useState } from 'react';
import { api } from '../services/api';
import './UserManagement.css';

function UserManagement() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await api.addUser(name, address);
      setResult(data);
      if (data.isSuccess) {
        setName('');
        setAddress('');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleFindUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await api.findUser(searchName);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      <div className="forms-container">
        <div className="form-section">
          <h3>Add User</h3>
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </form>
        </div>

        <div className="form-section">
          <h3>Find User</h3>
          <form onSubmit={handleFindUser}>
            <div className="form-group">
              <label htmlFor="searchName">Name:</label>
              <input
                type="text"
                id="searchName"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Find User'}
            </button>
          </form>
        </div>
      </div>

      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="result-section">
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
