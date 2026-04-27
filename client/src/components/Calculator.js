import React, { useState } from 'react';
import { api } from '../services/api';
import './Calculator.css';

function Calculator() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await api.addTwoNumber(numberA, numberB);
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div className="form-group">
          <label htmlFor="numberA">Number A:</label>
          <input
            type="number"
            id="numberA"
            value={numberA}
            onChange={(e) => setNumberA(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberB">Number B:</label>
          <input
            type="number"
            id="numberB"
            value={numberB}
            onChange={(e) => setNumberB(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Add Numbers'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {result && result.isSuccess && (
        <div className="result-section">
          <h3>Result: {result.sum}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;
