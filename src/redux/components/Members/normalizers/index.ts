import { IDropdownResponse } from '../../Staff';
import { IMembersSubscriptions } from '../Members.interface';

export const normalizeMembersForDropdown = (
	members: IMembersSubscriptions[]
): IDropdownResponse[] =>
	members.map((it) => ({
		id: it.membershipId,
		name: it.memberName,
	}));


