import { IAuthInitialState } from 'redux/components/Auth';
import {IStaff} from "../../../redux/components/Staff";

export interface IStaffDetailProps {
	auth: IAuthInitialState;
	staffDetail: IStaff;
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
