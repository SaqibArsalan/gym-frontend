import { NUMBER_FIELD_TYPE, regexMatch } from './NumberField.configs';

export const validateValueBasedOnType = (
	rawValue: string,
	type: NUMBER_FIELD_TYPE
) => new RegExp((regexMatch as any)[type]).test(rawValue) || !rawValue;
