import React, { useState } from 'react';

function RegistrationForm() {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State for error messages
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
    } else if (formData.name === '' || formData.email === '' || formData.password === '') {
      setError("All fields are required!");
    } else {
      setError('');
      alert(`Registration Successful! \nName: ${formData.name} \nEmail: ${formData.email}`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h2>Registration Form</h2>
      
      {/* Display error message */}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#6200ea', color: 'white', border: 'none', borderRadius: '5px' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
