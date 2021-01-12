import React, { useEffect, useState } from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import firebase from '../firebase';
import Plan from './Plan';
import './PlanList.css';
export default function PlanList() {
	const { currentUser } = useAuth();
	const [planList, setPlanList] = useState([]);
	useEffect(() => {
		const uid = currentUser.uid;
		const planRef = firebase.database().ref('visionboard/' + uid);
		planRef.on('value', (snapshot) => {
			const plans = snapshot.val();
			console.log(plans);
			const tempList = [];
			for (let id in plans) {
				tempList.push({ id, ...plans[id] });
			}
			setPlanList(tempList);
		});
	}, []);
	console.log(planList);
	return (
		<Container className="mt-5 PlanList">
			{planList
				? planList.map((plan) => <Plan plan={plan} key={plan.id} />)
				: ''}
		</Container>
	);
}
