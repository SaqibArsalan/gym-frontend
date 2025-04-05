import {IStaffCreation} from "./StaffInfo/UserInfo.interface";
import {IUserCreateOrUpdate} from "../../../redux/components/User";

export const FIELD_KEYS = {
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	EMAIL: 'email',
	PASSWORD: 'password',
	DATE_OF_BIRTH: 'dateOfBirth',
	PHONE_NUMBER: 'phoneNumber',
	ACCOUNT_STATUS: 'activeStatus'
};

export const emptyUserCreationPayload: IUserCreateOrUpdate = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	phoneNumber: '',
	accountStatus: 'ACTIVE',
	dateOfBirth: '',
};
