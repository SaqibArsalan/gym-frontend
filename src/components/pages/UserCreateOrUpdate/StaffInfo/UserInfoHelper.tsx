import {FieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper";
import {throwErrorToast} from "../../../../redux/utils/source.helper";
import {IStaffCreation} from "./UserInfo.interface";
import {userCreationFields} from "./UserInfo.configs";
import {IUserCreateOrUpdate} from "../../../../redux/components/User";


export const generateDynamicComponentsWithProps = (injectionProps: {
    userCreationPayload: IUserCreateOrUpdate;
    onChange: Function;
    fieldProps?: {
        [FIELD_KEYS: string]: any;
    };
}) => userCreationFields.map((fieldInfo, index: number) => {
        const { wrapperProps, componentProps, components } = fieldInfo;
        const { onChange, fieldProps, userCreationPayload } = injectionProps;
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
                        selectedPayload: userCreationPayload,
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

export const userFormErrors = {
    requiredAllField: 'Please fill the fields',
    invalidValue: 'Please enter correct value of {field}',
    validNumber: 'Please enter valid Number',
};

export const validateForm = (userCreationPayload: IUserCreateOrUpdate) => {
    const {
        firstName,
        lastName,
        email,
        password,
        dateOfBirth
    } = userCreationPayload;
    let result = true;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !dateOfBirth
    ) {
        throwErrorToast({ statusText: userFormErrors.requiredAllField });
        result = false;
    }

    return result;
};

