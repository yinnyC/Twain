import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import Login from '../components/Login';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path="/" component={SignupPage} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
