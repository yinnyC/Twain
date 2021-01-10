import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import VisionBoard from '../pages/VisionBoard';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path="/" component={SignupPage} />
					<Route path="/home" component={VisionBoard} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
