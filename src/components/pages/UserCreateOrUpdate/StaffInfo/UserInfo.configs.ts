import {IUserCreationField} from './UserInfo.interface';
import MultiSelectFieldWrapper from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper";
import TextFieldWrapper from "./TextFieldWrapper/TextFieldWrapper";
import {FIELD_KEYS} from "../UserCreateOrUpdate.constants";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import DateFieldWrapper from "./DateFieldWrapper/DateFieldWrapper";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";


export const userCreationFields: IUserCreationField[] = [
	{
		wrapperProps: {
			heading: 'First Name',
			subHeading: 'Provide First Name',
			fieldLabel: 'First NAME',
			fieldPlaceholder: 'eg: JOHN',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.FIRST_NAME,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Last Name',
			subHeading: 'Provide Last Name',
			fieldLabel: 'Last NAME',
			fieldPlaceholder: 'eg: JOHN',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.LAST_NAME,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Email',
			subHeading: 'Provide Email',
			fieldLabel: 'Email',
			fieldPlaceholder: 'eg: JOHN123@gmail.com',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.EMAIL,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Email',
			subHeading: 'Provide Password',
			fieldLabel: 'Password',
			fieldPlaceholder: 'eg: JOHN123',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.PASSWORD,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Phone Number',
			subHeading: 'Provide Phone Number',
			fieldLabel: 'Phone Number',
			fieldPlaceholder: 'eg: 033X-21345',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.PHONE_NUMBER,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Date Of Birth',
			subHeading: 'Select the date of Birth',
			fieldLabel: 'DATE',
			fieldPlaceholder: 'eg: 1st June 2024',
		},
		components: [DateFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.DATE_OF_BIRTH,
			} as IDateFieldWrapperProps,
		],
	}
];