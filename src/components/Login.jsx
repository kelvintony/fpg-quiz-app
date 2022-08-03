import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: ''
	});
	const [ error, setError ] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = () => {
		if (formData.name.length === 0 || formData.email.length === 0) {
			setError(true);
		}

		if (formData.name && formData.email) {
			localStorage.setItem('userProfile', JSON.stringify(formData));
			navigate('/dashboard');
		}
	};
	return (
		<section class='login-container'>
			<h1 class='login-container-heading'>Fill in the form to start quiz</h1>
			<a href='' style={{ color: 'gray' }}>
				<i class='fa-solid fa-3x fa-brackets-curly' />
			</a>
			<br />
			<div class='login-container-a'>
				<label for=''>
					Name: <br />
					<input
						type='text'
						id='name'
						value={formData.name}
						onChange={(e) => {
							setFormData({ ...formData, name: e.target.value });
						}}
					/>
				</label>{' '}
				<br />
				{error && formData.name.length <= 0 ? <label style={{ color: 'red' }}>name can't be empty</label> : ''}
				<br />
				<label for=''>
					Email: <br />
					<input
						type='email'
						id='email'
						value={formData.email}
						onChange={(e) => {
							setFormData({ ...formData, email: e.target.value });
						}}
					/>
				</label>{' '}
				<br />
				{error && formData.email.length <= 0 ? (
					<label style={{ color: 'red' }}>email can't be empty</label>
				) : (
					''
				)}
				<br />
				<button onClick={handleSubmit} class='login-container-btn'>
					Start Test
				</button>
			</div>
		</section>
	);
};

export default Login;
