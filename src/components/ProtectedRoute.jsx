import React, { useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('userProfile')));
	const location = useLocation();

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('userProfile')));
	}, []);
	return user ? children : <Navigate to='/' state={{ from: location }} replace />;
};
