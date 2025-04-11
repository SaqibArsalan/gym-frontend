import {Box, Breadcrumbs, Button, Divider, Stack, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import debounce from '@mui/utils/debounce';
import {FIELD_KEYS} from "../ClassCreateOrUpdate.constants";
import {generateDynamicComponentsWithProps, validateForm} from "./ClassInfoHelper";
import {IAutoCompleteComponentProps} from "../../../shared/AutoCompleteComponent/AutoCompleteComponent.interface";
import styles from './ClassInfo.module.scss';
import {FieldWrapperComponent} from "../../../shared/FieldWrapper/FieldWrapper";
import AutoCompleteComponent from "../../../shared/AutoCompleteComponent/AutoCompleteComponent";
import ActionButtons from "../../../shared/ActionButtons/ActionButtons";
import {IClassInfoProps} from "./ClassInfo.interface";
import {fetchUsersByName} from "../../../../redux/components/User/sources";
import {fetchStaffByName} from "../../../../redux/components/Staff/sources";


function ClassInfo(props: IClassInfoProps) {
    const {classCreationPayload, staffByNameList, onContinue, ...rest} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const onContinueClick = () => {
        const isValidated = validateForm(classCreationPayload);
        if (onContinue && isValidated) {
            onContinue();
        }
    };

    const onChange = (id: string, value: any) => {
        (classCreationPayload as any)[id] = value;
        if (id === FIELD_KEYS.TRAINER_ID) {
            (classCreationPayload as any)[FIELD_KEYS.TRAINER_ID] = value ? value.id : '';
        }
    };

    const onClassSearch = useCallback(
        debounce((fieldId: string, name: string) => {
            dispatch(fetchStaffByName(name));
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
        onChange: onClassSearch,
        onSelection: onChange,
    };

    const fieldsToRender = generateDynamicComponentsWithProps({
        classCreationPayload,
        onChange
    });

    return (
        <div id={styles.classInfoContainer}>
            <Paper className='basic-info-paper' elevation={3} sx={{ padding: '30px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography id={styles.title} component='p'>
                            Class Details
                        </Typography>
                        <Typography id={styles.subHeading} component='p'>
                            Enter Class details
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        <FieldWrapperComponent heading='Staff' subHeading='Select Staff'>
                            <AutoCompleteComponent {...staffProps} />
                        </FieldWrapperComponent>
                        {fieldsToRender}
                    </Stack>
                </Stack>
                <ActionButtons {...rest} onContinue={onContinueClick} />
            </Paper>
        </div>
    );
}


export default ClassInfo;
