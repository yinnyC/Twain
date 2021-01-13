import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';
export default function ForgotPassword(props) {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const catchErrorMsg = (msg) => {
		setError(msg);
	};
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value, catchErrorMsg);
			setMessage('Check your inbox for further information');
		} catch {
			setError(error);
		}
		setLoading(false);
	}
	return (
		<div>
			<Card className="p-2 shadow">
				<Card.Body>
					<h2 className="text-center mb-4">Password Reset</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					{message && <Alert variant="success">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Button
							disable={loading}
							className="w-100 btn-lg"
							style={{ color: '#fff' }}
							type="submit"
						>
							Reset Password
						</Button>
					</Form>
				</Card.Body>
				<Card.Footer style={{ backgroundColor: '#fff' }}>
					<div className="w-100 text-center">
						<Link
							to="/"
							onClick={() => {
								props.onSwitch('login');
							}}
						>
							Back to Log in
						</Link>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
