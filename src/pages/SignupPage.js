import React, { useState } from 'react';
import logo from './logo.png';
import { Image, Col } from 'react-bootstrap';
import Signup from '../components/Signup';
import './SignupPage.css';
import Login from '../components/Login';
export default function SignupPage() {
	const handleSwitchToSignUp = () => {
		setFormToDisplay(<Signup onSwitch={handleSwitchToLogin} />);
	};
	const handleSwitchToLogin = () => {
		setFormToDisplay(<Login onSwitch={handleSwitchToSignUp} />);
	};
	const [formToDisplay, setFormToDisplay] = useState(
		<Signup onSwitch={handleSwitchToLogin} />
	);
	return (
		<div
			className="row justify-content-center align-items-center"
			style={{ backgroundColor: '#FDF4F1', height: '100vh' }}
		>
			<Col md={4}>
				<Image src={logo} className="mx-auto d-block Logo" alt="Logo" fluid />
			</Col>
			<Col md={{ span: 4, offset: 1 }} className="Signup p-4">
				{formToDisplay}
			</Col>
		</div>
	);
}
