import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import Homepage from '../pages/Homepage';
import PrivateRoute from './PrivateRoute';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<PrivateRoute exact path="/" component={Homepage} />
					<Route path="/twain" component={SignupPage} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
