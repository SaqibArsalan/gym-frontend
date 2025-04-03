import React from "react";
import {FieldWrapper} from "../../../shared/FieldWrapper/FieldWrapper";
import {throwErrorToast} from "../../../../redux/utils/source.helper";
import {IMemberCreation} from "./MemberInfo.interface";
import {memberCreationFields} from "./MemberInfo.configs";


export const generateDynamicComponentsWithProps = (injectionProps: {
    memberCreationPayload: IMemberCreation;
    onChange: Function;
    fieldProps?: {
        [FIELD_KEYS: string]: any;
    };
}) => memberCreationFields.map((fieldInfo, index: number) => {
        const { wrapperProps, componentProps, components } = fieldInfo;
        const { onChange, fieldProps, memberCreationPayload } = injectionProps;
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
                        selectedPayload: memberCreationPayload,
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

export const memberFormErrors = {
    requiredAllField: 'Please fill the fields',
    invalidValue: 'Please enter correct value of {field}',
    validNumber: 'Please enter valid Number',
};

export const validateForm = (memberCreationPayload: IMemberCreation) => {
    const {
        memberName,
        membershipPlanId,
        joinDate,
        durationInMonths
    } = memberCreationPayload;
    let result = true;
    if (
        !memberName ||
        !membershipPlanId ||
        !joinDate ||
        !durationInMonths
    ) {
        throwErrorToast({ statusText: memberFormErrors.requiredAllField });
        result = false;
    }
    if (result && !Number(durationInMonths > 0)) {
        throwErrorToast({ statusText: memberFormErrors.validNumber });
        result = false;
    }

    return result;
};

