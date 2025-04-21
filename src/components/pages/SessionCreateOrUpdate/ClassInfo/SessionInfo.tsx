import {Box, Breadcrumbs, Button, Divider, Stack, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import debounce from '@mui/utils/debounce';
import {FIELD_KEYS} from "../SessionCreateOrUpdate.constants";
import {generateDynamicComponentsWithProps, validateForm} from "./SessionInfoHelper";
import {IAutoCompleteComponentProps} from "../../../shared/AutoCompleteComponent/AutoCompleteComponent.interface";
import styles from './SessionInfo.module.scss';
import {FieldWrapperComponent} from "../../../shared/FieldWrapper/FieldWrapper";
import AutoCompleteComponent from "../../../shared/AutoCompleteComponent/AutoCompleteComponent";
import ActionButtons from "../../../shared/ActionButtons/ActionButtons";
import {ISessionInfoProps} from "./SessionInfo.interface";
import {fetchUsersByName} from "../../../../redux/components/User/sources";
import {fetchStaffByName} from "../../../../redux/components/Staff/sources";
import {fetchClassesForDropdown} from "../../../../redux/components/Gym Class/sources";


function SessionInfo(props: ISessionInfoProps) {
    const {sessionCreationPayload, staffByNameList, classListForDropdown, onContinue, ...rest} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const onContinueClick = () => {
        const isValidated = validateForm(sessionCreationPayload);
        if (onContinue && isValidated) {
            onContinue();
        }
    };

    const onChange = (id: string, value: any) => {
        (sessionCreationPayload as any)[id] = value;
        if (id === FIELD_KEYS.TRAINER_ID) {
            (sessionCreationPayload as any)[FIELD_KEYS.TRAINER_ID] = value ? value.id : '';
        }
        if (id === FIELD_KEYS.CLASS_ID) {
            (sessionCreationPayload as any)[FIELD_KEYS.CLASS_ID] = value ? value.id : '';
        }
    };

    const onStaffSearch = useCallback(
        debounce((fieldId: string, name: string) => {
            dispatch(fetchStaffByName(name));
        }, 1000),
        []
    );

    const onClassSearch = useCallback(
        debounce((fieldId: string, name: string) => {
            dispatch(fetchClassesForDropdown(name));
        }, 1000),
        []
    );


    const staffProps: IAutoCompleteComponentProps = {
        key: 'staff-autocomplete',
        label: 'STAFF',
        placeholder: 'eg: John',
        fieldKey: FIELD_KEYS.TRAINER_ID,
        isAsync: true,
        options: staffByNameList,
        defaultValue: {
            id: '',
            name: ''
        },
        onChange: onStaffSearch,
        onSelection: onChange,
    };

    const classProps: IAutoCompleteComponentProps = {
        key: 'class-autocomplete',
        label: 'CLASS',
        placeholder: 'eg: Monthly Plan',
        fieldKey: FIELD_KEYS.CLASS_ID,
        isAsync: true,
        options: classListForDropdown,
        defaultValue: {
            id: '',
            name: ''
        },
        onChange: onClassSearch,
        onSelection: onChange,
    };

    const fieldsToRender = generateDynamicComponentsWithProps({
        sessionCreationPayload,
        onChange
    });

    return (
        <div id={styles.sessionInfoContainer}>
            <Paper className='basic-info-paper' elevation={3} sx={{ padding: '30px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography id={styles.title} component='p'>
                            Session Details
                        </Typography>
                        <Typography id={styles.subHeading} component='p'>
                            Enter Session details
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        <FieldWrapperComponent heading='Staff' subHeading='Select Staff'>
                            <AutoCompleteComponent {...staffProps} />
                        </FieldWrapperComponent>
                        <FieldWrapperComponent heading='Class' subHeading='Select Class'>
                            <AutoCompleteComponent {...classProps} />
                        </FieldWrapperComponent>
                        {fieldsToRender}
                    </Stack>
                </Stack>
                <ActionButtons {...rest} onContinue={onContinueClick} />
            </Paper>
        </div>
    );
}


export default SessionInfo;
