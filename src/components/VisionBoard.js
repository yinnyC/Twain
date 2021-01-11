import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
export default function VisionBoard() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Plan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Control type="text" placeholder="What's your plan" />
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
