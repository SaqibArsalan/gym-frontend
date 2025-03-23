import { combineReducers } from 'redux';
import * as Auth from './components/Auth';
import * as Miscellaneous from './components/Miscellaneous';
import * as Members from "./components/Members";

// add modules here after import to register reducers
const modules = [Auth, Miscellaneous, Members];

const rootReducer = combineReducers(
	modules.reduce((reducersObject: any, module) => {
		reducersObject[module.reducerName] = module.reducer;
		return reducersObject;
	}, {})
);

// To expose rootReducer state type
export interface IRootState {
	[Auth.reducerName]: Auth.IAuthInitialState;
	[Miscellaneous.reducerName]: Miscellaneous.IMiscellaneousInitialState;
	[Members.reducerName]: Members.IMembersInitialState;
}

export default rootReducer;
