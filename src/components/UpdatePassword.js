import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
export default function UpdatePassword(props) {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
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
		const promises = [];
		setError('');
		setLoading(true);
		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if ((passwordRef.current.value, catchErrorMsg)) {
			promises.push(updatePassword(passwordRef.current.value, catchErrorMsg));
		}
		Promise.all(promises)
			.then(() => {
				props.onSceneSwitch('visionboard');
			})
			.catch(() => {
				setError(error);
			})
			.finally(() => {
				setError('');
				setLoading(true);
			});
	}
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Card className="p-2 shadow col-md-5 m-5">
				<Card.Body>
					<h2 className="text-center mb-4">Change Password</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								ref={emailRef}
								defaultValue={currentUser.email}
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								placeholder="Leave blank to keep the same"
							/>
						</Form.Group>
						<Form.Group id="password-confrim">
							<Form.Label>Password Confrimation</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								required
								placeholder="Leave blank to keep the same"
							/>
						</Form.Group>
						<Button disable={loading} className="w-100" type="submit">
							Update
						</Button>
					</Form>
				</Card.Body>
				<div className="w-100 text-center mb-2">
					<Link
						to="/"
						onClick={() => {
							props.onSceneSwitch('visionboard');
						}}
					>
						Cancel
					</Link>
				</div>
			</Card>
		</Container>
	);
}
