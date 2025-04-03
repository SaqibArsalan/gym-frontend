// import { getFromSession } from 'utils/Cache';
import {IMembersInitialState} from './Members.interface';

const membersInitialState: IMembersInitialState = {
	membersSubscriptions: [],
	memberDetails: null,
	membershipPlans: []
};

export default membersInitialState;
