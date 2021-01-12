import React, { useState, useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import firebase from '../firebase';
import PlanList from './PlanList';
export default function VisionBoard() {
	const { currentUser } = useAuth();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const titleRef = useRef();
	const categoryRef = useRef();
	function handleClick(e) {
		e.preventDefault();
		const uid = currentUser.uid;
		const visionboardRef = firebase.database().ref('visionboard/' + uid);
		const title = titleRef.current.value;
		const catagory = categoryRef.current.value;
		const plan = {
			title,
			catagory,
		};
		visionboardRef.push(plan);
		handleClose();
	}
	return (
		<>
			<Form className="col-md-6 mx-auto mt-5">
				<Form.Control
					size="lg"
					type="text"
					onClick={handleShow}
					className="rounded-pill"
					placeholder="Any new idea ? Jog it down!"
				/>
			</Form>
			<PlanList />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Plan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Plan</Form.Label>
							<Form.Control
								name="title"
								ref={titleRef}
								type="text"
								placeholder="What's your plan"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control as="select" ref={categoryRef} required>
								<option value="Health">Health,Fitness and Beauty</option>
								<option value="Romance">Family,Friends and Romance</option>
								<option value="Career">Career,Bussiness and Study</option>
								<option value="Financial">Financial</option>
								<option value="Recreation">Fun, Recreation and Travel</option>
							</Form.Control>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClick}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
