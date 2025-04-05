import {Box, Breadcrumbs, Button, Divider, Stack, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import debounce from '@mui/utils/debounce';
import {FIELD_KEYS} from "../UserCreateOrUpdate.constants";
import {generateDynamicComponentsWithProps, validateForm} from "./UserInfoHelper";
import {IAutoCompleteComponentProps} from "../../../shared/AutoCompleteComponent/AutoCompleteComponent.interface";
import styles from './UserInfo.module.scss';
import {FieldWrapperComponent} from "../../../shared/FieldWrapper/FieldWrapper";
import AutoCompleteComponent from "../../../shared/AutoCompleteComponent/AutoCompleteComponent";
import ActionButtons from "../../../shared/ActionButtons/ActionButtons";
import {IUserInfoProps} from "./UserInfo.interface";
import {fetchUsersByName} from "../../../../redux/components/User/sources";


function UserInfo(props: IUserInfoProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const {userCreationPayload, onContinue, ...rest} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const onContinueClick = () => {
        const isValidated = validateForm(userCreationPayload);
        if (onContinue && isValidated) {
            onContinue();
        }
    };

    const onChange = (id: string, value: any) => {
        (userCreationPayload as any)[id] = value;
    };

    const fieldsToRender = generateDynamicComponentsWithProps({
        userCreationPayload,
        onChange
    });

    return (
        <div id={styles.userInfoContainer}>
            <Paper className='basic-info-paper' elevation={3} sx={{ padding: '30px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography id={styles.title} component='p'>
                            User Details
                        </Typography>
                        <Typography id={styles.subHeading} component='p'>
                            Enter User details
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        {fieldsToRender}
                    </Stack>
                </Stack>
                <ActionButtons {...rest} onContinue={onContinueClick} />
            </Paper>
        </div>
    );
}


export default UserInfo;
