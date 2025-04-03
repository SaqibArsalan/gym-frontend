import {IMemberCreationField} from './MemberInfo.interface';
import MultiSelectFieldWrapper from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper";
import TextFieldWrapper from "./TextFieldWrapper/TextFieldWrapper";
import {FIELD_KEYS} from "../MemberCreateOrUpdate.constants";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import DateFieldWrapper from "./DateFieldWrapper/DateFieldWrapper";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";


export const memberCreationFields: IMemberCreationField[] = [
	{
		wrapperProps: {
			heading: 'Member Name',
			subHeading: 'Provide Member Name',
			fieldLabel: 'MEMBER NAME',
			fieldPlaceholder: 'eg: JOHN',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.MEMBER_NAME,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Duration In Months',
			subHeading: 'Provide the duration in months',
			fieldLabel: 'DURATION',
			fieldPlaceholder: 'eg: 3',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.DURATION,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Date Of Joining',
			subHeading: 'Select the date of Joining',
			fieldLabel: 'DATE',
			fieldPlaceholder: 'eg: 1st June 2024',
		},
		components: [DateFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.JOINING_DATE,
			} as IDateFieldWrapperProps,
		],
	}
];

