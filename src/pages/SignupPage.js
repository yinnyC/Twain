import React from 'react';
import logo from './logo.png';
import { Image, Col } from 'react-bootstrap';
import Signup from '../components/Signup';
import './SignupPage.css';
import Login from '../components/Login';
export default function SignupPage() {
	const handleDisplay = () => {
		console.log('In Handler');
		display = <Login onSwitch={handleDisplay} />;
	};
	let display = <Signup onSwitch={handleDisplay} />;
	return (
		<div
			className="row justify-content-center align-items-center"
			style={{ backgroundColor: '#FDF4F1', height: '100vh' }}
		>
			<Col md={4}>
				<Image src={logo} className="mx-auto d-block Logo" alt="Logo" fluid />
			</Col>
			<Col md={{ span: 4, offset: 1 }} className="Signup p-4">
				{display}
			</Col>
		</div>
	);
}
