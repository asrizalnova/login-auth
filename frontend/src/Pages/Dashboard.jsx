import React from "react";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%)',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.5rem, 2vw, 1rem)',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: 'clamp(35px, 8vw, 40px)',
            height: 'clamp(35px, 8vw, 40px)',
            backgroundColor: '#1e40af',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            flexShrink: 0
          }}>
            JT
          </div>
          <div>
            <h1 style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              color: '#1e40af',
              margin: 0,
              lineHeight: '1.2'
            }}>
              PT. Javis Teknologi Albarokah
            </h1>
            <p style={{
              fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
              color: '#6b7280',
              margin: 0,
              marginTop: '0.25rem'
            }}>
              Innovative Technology Solutions
            </p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          flexWrap: 'wrap'
        }}>
          <span style={{
            color: '#374151',
            fontWeight: '500',
            fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
            textAlign: 'right'
          }}>
            Welcome, <strong>{user?.username}</strong>
          </span>
          <button
            onClick={onLogout}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content - Flex grow untuk push footer ke bawah */}
      <div style={{
        flex: '1',
        padding: 'clamp(1rem, 3vw, 2rem)',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            lineHeight: '1.2'
          }}>
            Dashboard
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
            color: '#7e22ce',
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: '600',
            lineHeight: '1.3'
          }}>
            My name is Asrizal Nova Akhsanu from Magetan, East Java
          </h2>
          <div style={{
            height: '1px',
            backgroundColor: '#e5e7eb',
            margin: 'clamp(1.5rem, 3vw, 2rem) 0'
          }}></div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            flexWrap: 'wrap'
          }}>
            <div style={{
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                color: '#1e40af',
                margin: 0
              }}>
                TES
              </h3>
            </div>
            <div style={{
              width: '1px',
              height: 'clamp(25px, 6vw, 30px)',
              backgroundColor: '#d1d5db'
            }}></div>
            <div style={{
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                color: '#7e22ce',
                margin: 0
              }}>
                TES
              </h3>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 30vw, 250px), 1fr))',
          gap: 'clamp(1rem, 2.5vw, 1.5rem)',
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
        }}>
          {[
            { title: 'Total Projects', value: '24', color: '#1e40af' },
            { title: 'Completed', value: '18', color: '#10b981' },
            { title: 'In Progress', value: '6', color: '#f59e0b' },
            { title: 'Team Members', value: '12', color: '#7e22ce' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 'clamp(1rem, 2.5vw, 1.5rem)',
        textAlign: 'center',
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.05)',
        marginTop: 'auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(1rem, 3vw, 2rem)',
          marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
          flexWrap: 'wrap'
        }}>
        </div>
        <div style={{
          color: '#9ca3af',
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
        }}>
          © 2024 PT. Javis Teknologi Albarokah. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;