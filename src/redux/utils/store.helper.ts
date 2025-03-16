import { authInitialState, reducerName } from 'redux/components/Auth';
// import { existInLocal, getFromLocal } from 'utils/Cache';

/* eslint-disable import/prefer-default-export */

export const checkAndRestoreFromLocal = () => {
	// Name should be same as those of the reducers
	let userAuth = authInitialState;
	// if (process.env.STORAGE_KEY && existInLocal(process.env.STORAGE_KEY)) {
	// 	const existingState = getFromLocal(process.env.STORAGE_KEY) || {};
	// 	userAuth = { ...userAuth, ...existingState };
	// }
	return {
		[reducerName]: userAuth,
	};
};

