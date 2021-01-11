import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';
export default function Login(props) {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const catchErrorMsg = (msg) => {
		setError(msg);
	};
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError('');
			setLoading(true);
			await login(
				emailRef.current.value,
				passwordRef.current.value,
				catchErrorMsg
			);
			history.push('/');
		} catch {
			setError(error);
		}
		setLoading(false);
	}
	return (
		<div>
			<Card className="p-2 shadow">
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
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
						<Button disable={loading} className="w-100" type="submit">
							Log In
						</Button>
					</Form>
				</Card.Body>
				<div className="w-100 text-center ">
					Don't have an account?{' '}
					<Link
						to="/twain"
						onClick={() => {
							props.onSwitch('signup');
						}}
					>
						Sign up
					</Link>
				</div>
				<div className="w-100 text-center mb-2">
					<Link
						to="/twain"
						onClick={() => {
							props.onSwitch('forgotpassword');
						}}
					>
						Forgot Password?
					</Link>
				</div>
			</Card>
		</div>
	);
}
