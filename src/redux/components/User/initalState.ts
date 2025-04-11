// import { getFromSession } from 'utils/Cache';
import {IUserInitialState} from './User.interface';

const userInitialState: IUserInitialState = {
	usersByNameList: [],
	usersList: [],
	userDetail: null
};

export default userInitialState;
