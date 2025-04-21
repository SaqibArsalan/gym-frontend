import {FieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper";
import {throwErrorToast} from "../../../../redux/utils/source.helper";
import {IStaffCreation} from "./SessionInfo.interface";
import {classCreationFields} from "./SessionInfo.configs";
import {ICreateOrUpdateSession} from "../../../../redux/components/Session";


export const generateDynamicComponentsWithProps = (injectionProps: {
    sessionCreationPayload: ICreateOrUpdateSession;
    onChange: Function;
    fieldProps?: {
        [FIELD_KEYS: string]: any;
    };
}) => classCreationFields.map((fieldInfo, index: number) => {
        const { wrapperProps, componentProps, components } = fieldInfo;
        const { onChange, fieldProps, sessionCreationPayload } = injectionProps;
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
                        selectedPayload: sessionCreationPayload,
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

export const classFormErrors = {
    requiredAllField: 'Please fill the fields',
    invalidValue: 'Please enter correct value of {field}',
    validNumber: 'Please enter valid Number',
};

export const validateForm = (sessionCreationPayload: ICreateOrUpdateSession) => {
    const {
        classId,
        capacity,
        trainerId,
        sessionDate
    } = sessionCreationPayload;
    let result = true;
    if (
        !classId ||
        !trainerId ||
        !capacity ||
        !sessionDate
    ) {
        throwErrorToast({ statusText: classFormErrors.requiredAllField });
        result = false;
    }
    if (result && !Number(capacity)) {
        throwErrorToast({ statusText: classFormErrors.validNumber });
        result = false;
    }

    return result;
};

