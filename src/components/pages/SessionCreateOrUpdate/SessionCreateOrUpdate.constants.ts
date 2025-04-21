import {ICreateOrUpdateSession} from "../../../redux/components/Session";

export const FIELD_KEYS = {
	CLASS_ID: 'classId',
	SESSION_DATE: 'sessionDate',
	CAPACITY: 'capacity',
	TRAINER_ID: 'trainerId',
};

export const emptySessionCreationPayload: ICreateOrUpdateSession = {
	classId: '',
	trainerId: '',
	capacity: 0,
	sessionDate: ''
};
