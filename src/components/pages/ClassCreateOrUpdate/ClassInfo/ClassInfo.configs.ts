import {IClassCreationField} from './ClassInfo.interface';
import MultiSelectFieldWrapper from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper";
import TextFieldWrapper from "./TextFieldWrapper/TextFieldWrapper";
import {FIELD_KEYS} from "../ClassCreateOrUpdate.constants";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import DateFieldWrapper from "./DateFieldWrapper/DateFieldWrapper";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import DateTimeFieldWrapper from "./DateTimeFieldWrapper/DateTimeFieldWrapper";
import {IDateTimeFieldWrapperProps} from "./DateTimeFieldWrapper/DateTimeFieldWrapper.interface";


export const classCreationFields: IClassCreationField[] = [
	{
		wrapperProps: {
			heading: 'Class Name',
			subHeading: 'Provide Class Name',
			fieldLabel: 'CLASS NAME',
			fieldPlaceholder: 'eg: JOHN',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.CLASS_NAME,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Description',
			subHeading: 'Provide the description of Class',
			fieldLabel: 'Description',
			fieldPlaceholder: 'eg: Yoga class',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.DESCRIPTION,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Capacity',
			subHeading: 'Select the Capacity of People',
			fieldLabel: 'Capacity',
			fieldPlaceholder: 'eg: 10',
		},
		components: [TextFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.CAPACITY,
			} as ITextFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'Start Time',
			subHeading: 'Select the Start Time',
			fieldLabel: 'Start Time',
			fieldPlaceholder: 'eg: 12:00:00',
		},
		components: [DateTimeFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.START_TIME,
			} as IDateTimeFieldWrapperProps,
		],
	},
	{
		wrapperProps: {
			heading: 'End Time',
			subHeading: 'Select the End Time',
			fieldLabel: 'End Time',
			fieldPlaceholder: 'eg: 12:00:00',
		},
		components: [DateTimeFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.END_TIME,
			} as IDateTimeFieldWrapperProps,
		],
	}
];

