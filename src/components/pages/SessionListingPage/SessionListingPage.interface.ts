import { IAuthInitialState } from 'redux/components/Auth';
import {IClassResponseInfo} from "../../../redux/components/Gym Class";

export interface ISessionProps {
	auth: IAuthInitialState;
	sessionList: IClassResponseInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
