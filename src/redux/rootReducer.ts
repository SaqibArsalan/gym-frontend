import { combineReducers } from 'redux';
import * as Auth from './components/Auth';
import * as Miscellaneous from './components/Miscellaneous';
import * as Members from "./components/Members";
import * as Staff from "./components/Staff";
import * as User from "./components/User";
import * as GymClass from "./components/Gym Class";
import * as Session from "./components/Session";

// add modules here after import to register reducers
const modules = [Auth, Miscellaneous, Members, Staff, User, GymClass, Session];

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
	[Staff.reducerName]: Staff.IStaffInitialState;
	[User.reducerName]: User.IUserInitialState;
	[GymClass.reducerName]: GymClass.IGymClassInitialState;
	[Session.reducerName]: Session.ISessionInitialState;
}

export default rootReducer;
