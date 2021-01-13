import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import firebase from '../../firebase';
import Plan from '../Plan';
import './PlanList.css';
export default function PlanList() {
	const { currentUser } = useAuth();
	const [planList, setPlanList] = useState([]);
	const [query, setQuery] = useState('');
	useEffect(() => {
		const uid = currentUser.uid;
		const planRef = firebase.database().ref('visionboard/' + uid);
		planRef.on('value', (snapshot) => {
			const plans = snapshot.val();
			const tempList = [];
			for (let id in plans) {
				tempList.push({ id, ...plans[id] });
			}
			setPlanList(tempList);
		});
	}, [currentUser]);

	const plans = planList
		.filter((plan) => {
			if (query === '') {
				return plan;
			} else {
				return plan.catagory === query;
			}
		})
		.map((plan) => {
			return <Plan plan={plan} key={plan.id} />;
		});

	return (
		<Container className="mt-5">
			<Form className="col-sm-3 ml-auto d-flex align-items-center">
				<Form.Label className="ml-auto" style={{ fontSize: '12px' }}>
					Filter by:
				</Form.Label>
				<Form.Control
					className="col-sm-6 ml-auto"
					as="select"
					size="sm"
					onChange={(e) => setQuery(e.target.value)}
				>
					<option value="">unselect</option>
					<option value="Health">Health</option>
					<option value="Romance">Romance</option>
					<option value="Career">Career</option>
					<option value="Financial">Financial</option>
					<option value="Recreation">Recreation</option>
				</Form.Control>
			</Form>
			<div className=" PlanList">{planList ? plans : ''}</div>
		</Container>
	);
}
