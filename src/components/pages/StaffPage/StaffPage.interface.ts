import { IAuthInitialState } from 'redux/components/Auth';
import {IStaff} from "../../../redux/components/Staff";

export interface IStaffProps {
	auth: IAuthInitialState;
	staffList: IStaff[];
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
