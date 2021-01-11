import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
export default function Header(props) {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	const history = useHistory();
	async function handleLogOut() {
		setError('');
		try {
			await logout();
			console.log(error);
			history.push('/twain');
		} catch {
			setError('Failed to log out');
		}
	}
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Navbar.Brand
				href=""
				onClick={() => {
					props.onSceneSwitch('visionboard');
				}}
			>
				<img
					src={logo}
					width="60"
					height="30"
					className="d-inline-block align-top ml-2	"
					alt="Twain logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavDropdown drop="left" title="User">
						<NavDropdown.Item href="" onClick={handleLogOut}>
							Log Out
						</NavDropdown.Item>
						<NavDropdown.Item
							href=""
							onClick={() => {
								props.onSceneSwitch('updatepassword');
							}}
						>
							Change Password
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
