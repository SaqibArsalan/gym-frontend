import {FieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper";
import {throwErrorToast} from "../../../../redux/utils/source.helper";
import {IStaffCreation} from "./StaffInfo.interface";
import {staffCreationFields} from "./StaffInfo.configs";


export const generateDynamicComponentsWithProps = (injectionProps: {
    staffCreationPayload: IStaffCreation;
    onChange: Function;
    fieldProps?: {
        [FIELD_KEYS: string]: any;
    };
}) => staffCreationFields.map((fieldInfo, index: number) => {
        const { wrapperProps, componentProps, components } = fieldInfo;
        const { onChange, fieldProps, staffCreationPayload } = injectionProps;
        if (components?.length && componentProps?.length) {
            const WrappedElement = FieldWrapper(components, wrapperProps);
            const componentPropsForRenderedElement = componentProps?.map(
                (props: any) => {
                    const fieldPropsToInject = fieldProps ? fieldProps[props.fieldKey] : {};
                    const modifiedProps = { ...props, ...(fieldPropsToInject || {}) };
                    // TODO => this is to target each field for errors
                    // const errorText = (errorObject.current as any)[props.fieldKey];
                    return {
                        onChange,
                        ...modifiedProps,
                        selectedPayload: staffCreationPayload,
                    };
                }
            );
            return (
                <WrappedElement
                    key={index}
                componentProps={componentPropsForRenderedElement}
            />
        );
        }
        return null;
    });

export const staffFormErrors = {
    requiredAllField: 'Please fill the fields',
    invalidValue: 'Please enter correct value of {field}',
    validNumber: 'Please enter valid Number',
};

export const validateForm = (staffCreationPayload: IStaffCreation) => {
    const {
        name,
        salary,
        hireDate
    } = staffCreationPayload;
    let result = true;
    if (
        !name ||
        !salary ||
        !hireDate
    ) {
        throwErrorToast({ statusText: staffFormErrors.requiredAllField });
        result = false;
    }
    if (result && !Number(salary)) {
        throwErrorToast({ statusText: staffFormErrors.validNumber });
        result = false;
    }

    return result;
};

