import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Login Required</h1>
            <a
                href="/api/auth/login"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Login with Auth0
            </a>
        </div>
    );
};

export default LoginPage; 