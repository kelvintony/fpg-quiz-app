import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Quiz from './components/Quiz';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ProtectedRoute2 } from './components/ProtectedRoute2';
import { Page404 } from './components/Page404';

function App() {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('userProfile')));
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('userProfile')));
	}, []);
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{/* <Route exact path='/' element={!user ? <Login /> : <Navigate to='/dashboard' replace />} /> */}

					{/* <Route exact path='/' element={<Login />} /> */}

					{/* i added this instance below so that in case the person is already logged in, he should not be able to see the sign in page again */}
					{/* this instace should only be done for the signin and signout route */}
					<Route element={<ProtectedRoute2 />}>
						<Route exact path='/' element={<Login />} />
					</Route>

					{/* the user shoild only seee the dashboard when he or she is loggeg in */}
					<Route element={<ProtectedRoute />}>
						<Route exact path='/dashboard' element={<Quiz />} />
					</Route>
					<Route exact path='*' element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
