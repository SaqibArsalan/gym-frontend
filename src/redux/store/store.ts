import { configureStore } from '@reduxjs/toolkit';
import ReduxGlobals from 'redux/globals';
import { checkAndRestoreFromLocal } from 'redux/utils/store.helper';
import rootReducer from '../rootReducer';

const preloadedState = checkAndRestoreFromLocal();

const devTools = process.env.NODE_ENV !== 'production';

const store = configureStore({
	reducer: rootReducer,
	preloadedState,
	devTools,
});

ReduxGlobals.dispatch = store.dispatch;

store.subscribe(() => {
	// This fires when ever we update anything in store
});

export default store;