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
		});
	}
	function logout() {
		return auth.signOut();
	}
	function resetPassword(email, catchErrorMsg) {
		return auth.sendPasswordResetEmail(email).catch((error) => {
			var errorMessage = error.message;
			catchErrorMsg(errorMessage);
		});
	}
	function updateEmail(email, catchErrorMsg) {
		currentUser.updateEmail(email).catch((error) => {
			var errorMessage = error.message;
			catchErrorMsg(errorMessage);
		});
	}
	function updatePassword(password, catchErrorMsg) {
		currentUser.updatePassword(password).catch((error) => {
			var errorMessage = error.message;
			catchErrorMsg(errorMessage);
		});
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
		resetPassword,
		updateEmail,
		updatePassword,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
