import { combineReducers } from 'redux';
import * as Auth from './components/Auth';
import * as Miscellaneous from './components/Miscellaneous';

// add modules here after import to register reducers
const modules = [Auth, Miscellaneous];

const rootReducer = combineReducers(
	modules.reduce((reducersObject: any, module) => {
		console.log("came here", module);
		reducersObject[module.reducerName] = module.reducer;
		return reducersObject;
	}, {})
);

// To expose rootReducer state type
export interface IRootState {
	[Auth.reducerName]: Auth.IAuthInitialState;
	[Miscellaneous.reducerName]: Miscellaneous.IMiscellaneousInitialState;
}

export default rootReducer;
