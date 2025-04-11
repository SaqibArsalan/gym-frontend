import {FieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper";
import {throwErrorToast} from "../../../../redux/utils/source.helper";
import {IStaffCreation} from "./ClassInfo.interface";
import {classCreationFields} from "./ClassInfo.configs";
import {ICreateOrUpdateClass} from "../../../../redux/components/Gym Class";


export const generateDynamicComponentsWithProps = (injectionProps: {
    classCreationPayload: ICreateOrUpdateClass;
    onChange: Function;
    fieldProps?: {
        [FIELD_KEYS: string]: any;
    };
}) => classCreationFields.map((fieldInfo, index: number) => {
        const { wrapperProps, componentProps, components } = fieldInfo;
        const { onChange, fieldProps, classCreationPayload } = injectionProps;
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
                        selectedPayload: classCreationPayload,
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

export const validateForm = (classCreationPayload: ICreateOrUpdateClass) => {
    const {
        className,
        description,
        capacity,
        startTime,
        endTime
    } = classCreationPayload;
    let result = true;
    if (
        !className ||
        !description ||
        !capacity ||
        !startTime ||
        !endTime
    ) {
        console.log("creation payload", classCreationPayload);
        throwErrorToast({ statusText: classFormErrors.requiredAllField });
        result = false;
    }
    if (result && !Number(capacity)) {
        throwErrorToast({ statusText: classFormErrors.validNumber });
        result = false;
    }

    return result;
};

