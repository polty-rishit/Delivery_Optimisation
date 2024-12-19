"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Dummy user data for now
    const users = [
        { email: 'driver@example.com', password: 'password123', role: 'driver' },
        { email: 'customer@example.com', password: 'password123', role: 'customer' },
        { email: 'fleetmanager@example.com', password: 'password123', role: 'fleet-manager' }
    ];

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            // Redirect based on role
            router.push(`/${user.role}`);
        } else {
            alert('Invalid credentials');
        }
    };

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
        padding: '24px', // Reduced padding
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '350px', // Reduced width
    };

    const headingStyle = {
        fontSize: '1.5rem', // Reduced font size
        fontWeight: 'bold',
        marginBottom: '16px', // Reduced margin
        color: '#3b82f6',
    };

    const companyNameStyle: React.CSSProperties = {
        fontSize: '1.75rem', // Slightly reduced font size
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '16px',
        position: 'absolute', // Position it on the left
        left: '20px',
        top: '20px', // Adjust to fit your design
    };

    const inputStyle = {
        width: '100%',
        padding: '12px', // Reduced padding
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        marginBottom: '12px', // Reduced margin
        fontSize: '0.875rem', // Smaller font size
    };

    const selectStyle = {
        width: '100%',
        padding: '12px', // Reduced padding
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        marginBottom: '12px', // Reduced margin
        fontSize: '0.875rem', // Smaller font size
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px', // Reduced padding
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
            <h1 style={companyNameStyle}>EcoSmart Delivery</h1> {/* Company name on the left side */}
            <div style={formStyle}>
                <h2 style={headingStyle}>Welcome Back!</h2>
                <p style={{ textAlign: 'center', marginBottom: '24px', fontSize: '0.875rem', color: '#a0aec0' }}>
                    Sign in to access your dashboard and manage your deliveries efficiently.
                </p>

                <div>
                    <input
                        type="email"
                        style={inputStyle}
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        style={inputStyle}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div>
                        <label htmlFor="role" style={{ fontSize: '0.875rem', color: '#4a5568' }}>Select Role</label>
                        <select
                            id="role"
                            style={selectStyle}
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                        >
                            <option value="">Choose Role</option>
                            <option value="driver">Driver</option>
                            <option value="customer">Customer/Warehouse Owner</option>
                            <option value="fleet-manager">Fleet Manager</option>
                        </select>
                    </div>
                </div>

                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#2563eb')}
                    onClick={handleLogin}
                >
                    Login
                </button>

                <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: '#a0aec0' }}>
                    Don’t have an account? <a href="/signup" style={{ color: '#3b82f6', fontWeight: '600' }}>Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
