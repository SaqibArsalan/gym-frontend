import { IAuthInitialState } from 'redux/components/Auth';
import {IClassResponseInfo} from "../../../redux/components/Gym Class";

export interface IGymClassProps {
	auth: IAuthInitialState;
	classList: IClassResponseInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
