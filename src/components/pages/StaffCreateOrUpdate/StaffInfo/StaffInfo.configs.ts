import {IStaffCreationField} from './StaffInfo.interface';
import MultiSelectFieldWrapper from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper";
import TextFieldWrapper from "./TextFieldWrapper/TextFieldWrapper";
import {FIELD_KEYS} from "../StaffCreateOrUpdate.constants";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import DateFieldWrapper from "./DateFieldWrapper/DateFieldWrapper";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";


export const staffCreationFields: IStaffCreationField[] = [
	{
		wrapperProps: {
			heading: 'Staff Name',
			subHeading: 'Provide Staff Name',
			fieldLabel: 'STAFF NAME',
			fieldPlaceholder: 'eg: JOHN',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.STAFF_NAME,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Salary',
			subHeading: 'Provide the amount of Salary',
			fieldLabel: 'PKR',
			fieldPlaceholder: 'eg: 50000',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.SALARY,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Date Of Hire',
			subHeading: 'Select the date of Hiring',
			fieldLabel: 'DATE',
			fieldPlaceholder: 'eg: 1st June 2024',
		},
		components: [DateFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.HIRE_DATE,
			} as IDateFieldWrapperProps,
		],
	}
];

