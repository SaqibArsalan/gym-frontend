import {Box, Breadcrumbs, Button, Divider, Stack, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import debounce from '@mui/utils/debounce';
import {FIELD_KEYS} from "../StaffCreateOrUpdate.constants";
import {generateDynamicComponentsWithProps, validateForm} from "./StaffInfoHelper";
import {IAutoCompleteComponentProps} from "../../../shared/AutoCompleteComponent/AutoCompleteComponent.interface";
import styles from './StaffInfo.module.scss';
import {FieldWrapperComponent} from "../../../shared/FieldWrapper/FieldWrapper";
import AutoCompleteComponent from "../../../shared/AutoCompleteComponent/AutoCompleteComponent";
import ActionButtons from "../../../shared/ActionButtons/ActionButtons";
import {IStaffInfoProps} from "./StaffInfo.interface";
import {fetchUsersByName} from "../../../../redux/components/User/sources";


function StaffInfo(props: IStaffInfoProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const {staffCreationPayload, usersByNameList, onContinue, ...rest} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const onContinueClick = () => {
        const isValidated = validateForm(staffCreationPayload);
        if (onContinue && isValidated) {
            onContinue();
        }
    };

    const onChange = (id: string, value: any) => {
        (staffCreationPayload as any)[id] = value;
        if (id === FIELD_KEYS.USER) {
            (staffCreationPayload as any)[FIELD_KEYS.USER] = value.id;
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

    const fieldsToRender = generateDynamicComponentsWithProps({
        staffCreationPayload,
        onChange
    });

    return (
        <div id={styles.staffInfoContainer}>
            <Paper className='basic-info-paper' elevation={3} sx={{ padding: '30px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography id={styles.title} component='p'>
                            Staff Details
                        </Typography>
                        <Typography id={styles.subHeading} component='p'>
                            Enter staff details
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        <FieldWrapperComponent heading='User' subHeading='Select User'>
                            <AutoCompleteComponent {...userProps} />
                        </FieldWrapperComponent>
                        {fieldsToRender}
                    </Stack>
                </Stack>
                <ActionButtons {...rest} onContinue={onContinueClick} />
            </Paper>
        </div>
    );
}


export default StaffInfo;
