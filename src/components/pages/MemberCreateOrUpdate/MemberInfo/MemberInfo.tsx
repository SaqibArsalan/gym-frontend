import {Box, Breadcrumbs, Button, Divider, Stack, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import debounce from '@mui/utils/debounce';
import {FIELD_KEYS} from "../MemberCreateOrUpdate.constants";
import {generateDynamicComponentsWithProps, validateForm} from "./MemberInfoHelper";
import {IAutoCompleteComponentProps} from "../../../shared/AutoCompleteComponent/AutoCompleteComponent.interface";
import styles from './MemberInfo.module.scss';
import {FieldWrapperComponent} from "../../../shared/FieldWrapper/FieldWrapper";
import AutoCompleteComponent from "../../../shared/AutoCompleteComponent/AutoCompleteComponent";
import ActionButtons from "../../../shared/ActionButtons/ActionButtons";
import {IMemberInfoProps} from "./MemberInfo.interface";
import {fetchUsersByName} from "../../../../redux/components/User/sources";
import {fetchMembershipPlans} from "../../../../redux/components/Members/sources";
import SelectionComponent from "../../../shared/SelectionComponent/SelectionComponent";
import SelectFieldWrapper from "./SelectFieldWrapper/SelectFieldWrapper";
import {ISelectFieldWrapperProps} from "./SelectFieldWrapper/SelectFieldWrapper.interface";
import {IMembershipPlan} from "../../../../redux/components/Members";


function MemberInfo(props: IMemberInfoProps) {
    const {memberCreationPayload, usersByNameList, membershipPlans ,onContinue, ...rest} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMembershipPlans());
    }, []);

    const onContinueClick = () => {
        const isValidated = validateForm(memberCreationPayload);
        if (onContinue && isValidated) {
            onContinue();
        }
    };

    const onChange = (id: string, value: any) => {
        (memberCreationPayload as any)[id] = value;
        if (id === FIELD_KEYS.USER) {
            (memberCreationPayload as any)[FIELD_KEYS.USER] = value ? value.id : '';
        }
        if (id === FIELD_KEYS.PLAN) {
            (memberCreationPayload as any)[FIELD_KEYS.PLAN] = value;
        }
    };

    const onUsersSearch = useCallback(
        debounce((fieldId: string, name: string) => {
            dispatch(fetchUsersByName(name));
        }, 1000),
        []
    );

    const userProps: IAutoCompleteComponentProps = {
        key: 'user-autocomplete',
        label: 'USER',
        placeholder: 'eg: John',
        fieldKey: FIELD_KEYS.USER,
        isAsync: true,
        options: usersByNameList,
        itemDisplayKey: 'email',
        defaultValue: {
            id: '',
            name: '',
            email: ''
        },
        onChange: onUsersSearch,
        onSelection: onChange,
    };

    const membershipPlanProps: ISelectFieldWrapperProps = {
        label: 'Membership Plan',
        placeholder: 'eg: Monthly',
        fieldKey: FIELD_KEYS.PLAN,
        items: membershipPlans,
        onChange
    };

    const fieldsToRender = generateDynamicComponentsWithProps({
        memberCreationPayload,
        onChange
    });

    return (
        <div id={styles.memberInfoContainer}>
            <Paper className='basic-info-paper' elevation={3} sx={{ padding: '30px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography id={styles.title} component='p'>
                            Member Details
                        </Typography>
                        <Typography id={styles.subHeading} component='p'>
                            Enter Member details
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        <FieldWrapperComponent heading='User' subHeading='Select User'>
                            <AutoCompleteComponent {...userProps} />
                        </FieldWrapperComponent>
                        <FieldWrapperComponent heading='Plan' subHeading='Select Plan'>
                            <SelectFieldWrapper {...membershipPlanProps} />
                        </FieldWrapperComponent>
                        {fieldsToRender}
                    </Stack>
                </Stack>
                <ActionButtons {...rest} onContinue={onContinueClick} />
            </Paper>
        </div>
    );
}


export default MemberInfo;
