import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
export default function Signup(props) {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const catchErrorMsg = (msg) => {
		setError(msg);
	};
	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}
		try {
			setError('');
			setLoading(true);
			await signup(
				emailRef.current.value,
				passwordRef.current.value,
				catchErrorMsg
			);
			props.onSwitch('login');
		} catch {
			setError(error);
		}
		setLoading(false);
	}
	return (
		<div>
			<Card className="p-2 shadow">
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="password-confrim">
							<Form.Label>Password Confrimation</Form.Label>
							<Form.Control type="password" ref={passwordConfirmRef} required />
						</Form.Group>
						<Button
							disable={loading}
							variant="primary"
							style={{ color: '#fff' }}
							className="w-100 btn-lg"
							type="submit"
						>
							Sign Up
						</Button>
					</Form>
				</Card.Body>
				<Card.Footer style={{ backgroundColor: '#fff' }}>
					<div className="w-100 text-center mb-2">
						<Link
							className="btn btn-secondary col-md-10 btn-lg"
							style={{ color: '#fff' }}
							to="/"
							onClick={() => {
								props.onSwitch('login');
							}}
						>
							Log In
						</Link>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
