import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/login",
        { username, password },
        { withCredentials: true }
      );
      
      // Pastikan response success
      if (res.data.success) {
        console.log("Login successful:", res.data);
        onLogin(username); // Hanya kirim username ke parent
      }
    } catch (err) {
      console.error("Login error:", err);
      
      // Handle error response dari backend
      if (err.response && err.response.data && err.response.data.error) {
        setErrorMessage(err.response.data.error);
      } else if (username === "" && password === "") {
        setErrorMessage("Username dan password harus diisi");
      } else if (username === "") {
        setErrorMessage("Username harus diisi");
      } else if (password === "") {
        setErrorMessage("Password harus diisi");
      } else if (err.code === 'NETWORK_ERROR' || err.message === 'Network Error') {
        setErrorMessage("Tidak dapat terhubung ke server");
      } else {
        setErrorMessage("Username atau password salah");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ... (JSX code tetap sama)
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%)',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        position: 'relative'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '0.5rem'
        }}>
          LOGIN DULU
        </h1>
        
        <div style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#4b5563',
          marginBottom: '1rem'
        }}>
        </div>

        {errorMessage && (
          <div style={{
            backgroundColor: '#fee2e2',
            border: '2px solid #fecaca',
            color: '#dc2626',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(220, 38, 38, 0.1)',
            animation: 'slideDown 0.3s ease-out'
          }}>
            ⚠️ {errorMessage}
          </div>
        )}

        <style>
          {`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
          `}
        </style>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#374151'
            }}>
              Username :
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                border: errorMessage ? '2px solid #dc2626' : '1px solid #9ca3af',
                borderRadius: '0.375rem',
                padding: '0.75rem',
                outline: 'none',
                boxSizing: 'border-box',
                animation: errorMessage ? 'shake 0.3s ease-in-out' : 'none'
              }}
              required
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#374151'
            }}>
              Password :
            </label>
            <div style={{ 
              position: 'relative',
              width: '100%'
            }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  border: errorMessage ? '2px solid #dc2626' : '1px solid #9ca3af',
                  borderRadius: '0.375rem',
                  padding: '0.75rem',
                  paddingRight: '4.5rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  animation: errorMessage ? 'shake 0.3s ease-in-out' : 'none'
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#e5e7eb',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  height: 'fit-content'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#d1d5db'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e5e7eb'}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              backgroundColor: isLoading ? '#9ca3af' : '#dc2626',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              border: 'none',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginTop: '0.5rem'
            }}
            onMouseOver={(e) => !isLoading && (e.target.style.backgroundColor = '#b91c1c')}
            onMouseOut={(e) => !isLoading && (e.target.style.backgroundColor = '#dc2626')}
          >
            {isLoading ? "LOADING..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;