import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
export default function VisionBoard() {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	async function handleLogOut() {
		setError('');
		try {
			await logout();
			history.push('/');
		} catch {
			setError('Failed to log out');
		}
	}
	return (
		<div style={{ height: '100vh' }}>
			<Header />
			<Container
				className="d-flex justuly-content-center align-items-center"
				style={{ minHeight: '100vh' }}
			>
				<Card style={{ width: '100%' }}>
					<Card.Body>
						<h2 className="text-center">Profile</h2>
						{error && <Alert variant="danger">{error}</Alert>}
						<strong>Email: </strong> {currentUser.email}
						<Link to="/update-profile" className="w-100 btn btn-primary mt-3">
							Update Profile
						</Link>
					</Card.Body>
					<Button variant="link" onClick={handleLogOut}>
						Log Out
					</Button>
				</Card>
			</Container>
		</div>
	);
}
