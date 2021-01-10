import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}
export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	function signup(email, password, catchErrorMsg) {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				var errorMessage = error.message;
				catchErrorMsg(errorMessage);
			});
	}
	function login(email, password, catchErrorMsg) {
		return auth.signInWithEmailAndPassword(email, password).catch((error) => {
			var errorMessage = error.message;
			catchErrorMsg(errorMessage);
			console.log(errorMessage);
		});
	}
	function logout() {
		return auth.signOut();
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);
	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
