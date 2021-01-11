import React, { useState } from 'react';
import logo from './logo.png';
import { Image, Col } from 'react-bootstrap';
import Signup from '../components/Signup';
import './SignupPage.css';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
export default function SignupPage() {
	const handleScene = (toScene) => {
		setScene(toScene);
	};
	const [scene, setScene] = useState('signup');

	return (
		<div
			className="row justify-content-center align-items-center"
			style={{ backgroundColor: '#FDF4F1', height: '100vh' }}
		>
			<Col md={5}>
				<Image src={logo} className="mx-auto d-block Logo" alt="Logo" fluid />
			</Col>
			<Col md={{ span: 5, offset: 1 }} className="Signup p-4">
				{scene === 'signup' && <Signup onSwitch={handleScene} />}
				{scene === 'login' && <Login onSwitch={handleScene} />}
				{scene === 'forgotpassword' && (
					<ForgotPassword onSwitch={handleScene} />
				)}
			</Col>
		</div>
	);
}
