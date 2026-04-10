import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
    Box,
    Divider,
    Paper,
    Stack,
    Typography,
    Button,
} from '@mui/material';
import { FieldWrapperComponent } from 'components/shared/FieldWrapper/FieldWrapper';
import { IAutoCompleteComponentProps } from 'components/shared/AutoCompleteComponent/AutoCompleteComponent.interface';
import FormSubHeader from 'components/shared/FormSubHeader/FormSubHeader';
import AutoCompleteComponent from 'components/shared/AutoCompleteComponent/AutoCompleteComponent';
import { enrollMember } from 'redux/components/Enrollment/sources';
import { fetchSessionsForDropdown } from 'redux/components/Session/sources';
import { fetchMembersSubscriptions } from 'redux/components/Members/sources';
import { throwErrorToast } from 'redux/utils/source.helper';
import EnrollMemberPageConnector from './EnrollMemberPageConnector';
import { IEnrollMemberPayload, IEnrollMemberProps } from './EnrollMemberPage.interface';

function EnrollMemberComponent(props: IEnrollMemberProps) {
    const { sessionListForDropdown, membersSubscriptionsForDropdown } = props;
    const dispatch = useDispatch();

    const payload = useRef<IEnrollMemberPayload>({ sessionId: '', membershipId: '' });

    useEffect(() => {
        dispatch(fetchSessionsForDropdown());
        dispatch(fetchMembersSubscriptions());
    }, []);

    const onChange = (fieldKey: string, value: any) => {
        if (fieldKey === 'sessionId') {
            payload.current.sessionId = value ? value.id : '';
        }
        if (fieldKey === 'membershipId') {
            payload.current.membershipId = value ? value.id : '';
        }
    };

    const onSubmit = () => {
        const { sessionId, membershipId } = payload.current;
        if (!sessionId || !membershipId) {
            throwErrorToast({ statusText: 'Please select both a session and a member' });
            return;
        }
        dispatch(enrollMember(payload.current));
    };

    const sessionProps: IAutoCompleteComponentProps = {
        key: 'session-autocomplete',
        label: 'SESSION',
        placeholder: 'eg: Yoga — 10 Apr 2026',
        fieldKey: 'sessionId',
        isAsync: false,
        options: sessionListForDropdown,
        defaultValue: { id: '', name: '' },
        onSelection: onChange,
    };

    const memberProps: IAutoCompleteComponentProps = {
        key: 'member-autocomplete',
        label: 'MEMBER',
        placeholder: 'eg: John Doe',
        fieldKey: 'membershipId',
        isAsync: false,
        options: membersSubscriptionsForDropdown,
        defaultValue: { id: '', name: '' },
        onSelection: onChange,
    };

    return (
        <div className='creation-page'>
            <FormSubHeader
                title='Enroll Member'
                breadCrumbTitles={['Sessions', 'Enroll Member']}
            />
            <Paper elevation={3} sx={{ padding: '30px', mt: 2 }}>
                <Stack spacing={4}>
                    <Box>
                        <Typography variant='h6' fontWeight='bold'>
                            Enrollment Details
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Select a session and a member to enroll
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={5}>
                        <FieldWrapperComponent heading='Session' subHeading='Select the session to enroll into'>
                            <AutoCompleteComponent {...sessionProps} />
                        </FieldWrapperComponent>
                        <FieldWrapperComponent heading='Member' subHeading='Select the member to enroll'>
                            <AutoCompleteComponent {...memberProps} />
                        </FieldWrapperComponent>
                    </Stack>
                    <Box display='flex' justifyContent='flex-end'>
                        <Button variant='contained' color='primary' onClick={onSubmit}>
                            Enroll
                        </Button>
                    </Box>
                </Stack>
            </Paper>
        </div>
    );
}

const EnrollMemberPage = EnrollMemberPageConnector(EnrollMemberComponent);
export default EnrollMemberPage;




