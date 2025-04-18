import { IAuthInitialState } from 'redux/components/Auth';
import {ISessionInfo} from "../../../redux/components/Gym Class";

export interface IGymClassProps {
	auth: IAuthInitialState;
	classList: ISessionInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
