import { IAuthInitialState } from 'redux/components/Auth';
import {IMembersSubscriptions} from "../../../redux/components/Members";

export interface IMemberDetailProps {
	auth: IAuthInitialState;
	memberDetail: IMembersSubscriptions;
}

export interface ItableColumnsMap {
	headerTitle: string;
	valueKey: string;
}
