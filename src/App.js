import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Quiz from './components/Quiz';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Page404 } from './components/Page404';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route
						path='/dashboard'
						element={
							<ProtectedRoute>
								{' '}
								<Quiz />
							</ProtectedRoute>
						}
					/>
					<Route exact path='*' element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
