import { IAuthInitialState } from 'redux/components/Auth';
import {IClassInfo} from "../../../redux/components/Gym Class";

export interface IGymClassProps {
	auth: IAuthInitialState;
	classList: IClassInfo[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
