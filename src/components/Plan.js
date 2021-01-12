import React from 'react';
import { Card, Badge } from 'react-bootstrap';
function Plan(props) {
	return (
		<Card className="p-2 rounded-pill">
			<Card.Body
				className="d-flex p-2 align-items-center"
				style={{ justifyContent: 'space-between' }}
			>
				{props.plan.title}
				<Badge pill variant="secondary">
					{props.plan.catagory}
				</Badge>
			</Card.Body>
		</Card>
	);
}
export default Plan;
