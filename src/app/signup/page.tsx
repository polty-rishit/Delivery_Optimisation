"use client";
import { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');

    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #020c1b, #1e3a5f, #0a192f)', // Navy and dark blue tones
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
    };

    const formStyle = {
        backgroundColor: 'white',
        color: '#2d3748',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '350px',
    };

    const headingStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#3b82f6',
    };

    const companyNameStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '16px',
        position: 'absolute' as const,
        left: '20px',
        top: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        marginBottom: '12px',
        fontSize: '0.875rem',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2563eb',
        color: 'white',
        fontWeight: '600',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#1d4ed8',
    };

    return (
        <div style={containerStyle}>
            <h1 style={companyNameStyle}>EcoSmart Delivery</h1>
            <div style={formStyle}>
                <h2 style={headingStyle}>Signup</h2>
                <p style={{ textAlign: 'center', marginBottom: '24px', fontSize: '0.875rem', color: '#a0aec0' }}>
                    Please contact the admin to create your account.
                </p>

                <div>
                    <input
                        type="email"
                        style={inputStyle}
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#2563eb')}
                    onClick={() => alert('Please contact the admin to create your account.')}
                >
                    Submit
                </button>

                <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: '#a0aec0' }}>
                    Already have an account? <a href="/login" style={{ color: '#3b82f6', fontWeight: '600' }}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
