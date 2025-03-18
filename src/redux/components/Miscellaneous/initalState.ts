// import { getFromSession } from 'utils/Cache';
import { IMiscellaneousInitialState } from './Miscellaneous.interface';

const miscellaneousInitialState: IMiscellaneousInitialState = {
	warehouses: [],
	activeMembersCount: 0,
	activeSubscriptionsCount: 0,
	newSignupsCount: 0
};

export default miscellaneousInitialState;
