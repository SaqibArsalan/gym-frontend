import {IStaffCreation} from "./StaffInfo/StaffInfo.interface";

export const FIELD_KEYS = {
	STAFF_NAME: 'name',
	SALARY: 'salary',
	HIRE_DATE: 'hireDate',
	EMAIL: 'email',
	USER: 'userId',
};

export const emptyStaffCreationPayload: IStaffCreation = {
	name: '',
	userId: '',
	salary: 0,
	hireDate: '',
};
