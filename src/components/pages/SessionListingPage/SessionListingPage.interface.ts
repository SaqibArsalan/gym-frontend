import { IAuthInitialState } from 'redux/components/Auth';
import {ISessionInfo} from "../../../redux/components/Gym Class";

export interface ISessionProps {
	auth: IAuthInitialState;
	sessionList: ISessionInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
