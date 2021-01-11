import React, { useState } from 'react';
import Header from '../components/Header';
import VisionBoard from '../components/VisionBoard';
import UpdatePassword from '../components/UpdatePassword';
export default function Homepage() {
	const [scene, setScene] = useState('visionboard');
	const sceneSwitchHandler = (toScene) => {
		setScene(toScene);
	};
	return (
		<div style={{ height: '100vh' }}>
			<Header onSceneSwitch={sceneSwitchHandler} />
			{scene === 'visionboard' && <VisionBoard />}
			{scene === 'updatepassword' && (
				<UpdatePassword onSceneSwitch={sceneSwitchHandler} />
			)}
		</div>
	);
}
