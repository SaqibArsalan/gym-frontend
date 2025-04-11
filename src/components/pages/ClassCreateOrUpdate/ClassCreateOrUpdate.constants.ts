import {ICreateOrUpdateClass} from "../../../redux/components/Gym Class";

export const FIELD_KEYS = {
	CLASS_NAME: 'className',
	DESCRIPTION: 'description',
	CAPACITY: 'capacity',
	START_TIME: 'startTime',
	END_TIME: 'endTime',
	TRAINER_ID: 'trainerId',
};

export const emptyClassCreationPayload: ICreateOrUpdateClass = {
	className: '',
	description: '',
	trainerId: '',
	capacity: 0,
	startTime: '',
	endTime: '',
};
