import React, { useContext, useState, useEffect } from 'react';
import firebase, { auth } from '../firebase';

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
	async function setpersistence() {
		try {
			await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
		} catch (error) {
			const errorMessage = error.message;
			console.log('in setPersistence ' + errorMessage);
		}
	}
	async function login(email, password, catchErrorMsg) {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			console.log('sign-in complete');
			await setpersistence();
		} catch (error) {
			const errorMessage = error.message;
			catchErrorMsg(errorMessage);
			console.log('in login' + errorMessage);
		}
	}

	// function login(email, password, catchErrorMsg) {
	// 	auth
	// 		.setPersistence(firebase.auth.Auth.Persistence.SESSION)
	// 		.then(() => {
	// 			return auth.signInWithEmailAndPassword(email, password, catchErrorMsg);
	// 		})
	// 		.catch((error) => {
	// 			// Handle Errors here.
	// 			var errorCode = error.code;
	// 			var errorMessage = error.message;
	// 			console.log(errorCode, errorMessage);
	// 		});
	// }
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
