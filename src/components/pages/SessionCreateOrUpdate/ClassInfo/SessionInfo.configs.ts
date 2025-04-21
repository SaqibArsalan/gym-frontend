import {ISessionCreationField} from './SessionInfo.interface';
import MultiSelectFieldWrapper from "./MultiSelectFieldWrapper/MultiSelectFieldWrapper";
import TextFieldWrapper from "./TextFieldWrapper/TextFieldWrapper";
import {FIELD_KEYS} from "../SessionCreateOrUpdate.constants";
import {ITextFieldWrapperProps} from "./TextFieldWrapper/TextFieldWrapper.interface";
import DateFieldWrapper from "./DateFieldWrapper/DateFieldWrapper";
import {IDateFieldWrapperProps} from "./DateFieldWrapper/DateFieldWrapper.interface";
import DateTimeFieldWrapper from "./DateTimeFieldWrapper/DateTimeFieldWrapper";
import {IDateTimeFieldWrapperProps} from "./DateTimeFieldWrapper/DateTimeFieldWrapper.interface";


export const classCreationFields: ISessionCreationField[] = [
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
			heading: 'Start Session Date',
			subHeading: 'Select the Session Date',
			fieldLabel: 'Session Date',
			fieldPlaceholder: 'eg: 12:00:00',
		},
		components: [DateTimeFieldWrapper],
		componentProps: [
			{
				disabled: false,
				fieldKey: FIELD_KEYS.SESSION_DATE,
			} as IDateTimeFieldWrapperProps,
		],
	}
];

