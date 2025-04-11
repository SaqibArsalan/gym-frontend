import { IAuthInitialState } from 'redux/components/Auth';
import {IUserInfo} from "../../../redux/components/User";

export interface IUserDetailProps {
	auth: IAuthInitialState;
	userDetail: IUserInfo;
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
