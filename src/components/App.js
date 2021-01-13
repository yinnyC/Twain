import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import Homepage from '../pages/Homepage';
import PrivateRoute from './PrivateRoute';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path="/" component={SignupPage} />
					<PrivateRoute path="/twain" component={Homepage} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
