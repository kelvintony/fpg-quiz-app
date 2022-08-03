import React, { useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute2 = () => {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('userProfile')));
	const location = useLocation();

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('userProfile')));
	}, []);
	return user ? <Navigate to='/dashboard' state={{ from: location }} replace /> : <Outlet />;
};
