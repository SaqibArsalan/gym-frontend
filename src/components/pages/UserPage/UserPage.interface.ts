import { IAuthInitialState } from 'redux/components/Auth';
import {IUserInfo} from "../../../redux/components/User";

export interface IUserProps {
	auth: IAuthInitialState;
	userList: IUserInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
