import React from 'react';

function Plan(props) {
	return (
		<div>
			<h2 className={props.plan.complete ? 'complete' : ''}>
				{props.plan.title}
				{props.plan.catagory}
			</h2>
		</div>
	);
}
export default Plan;
