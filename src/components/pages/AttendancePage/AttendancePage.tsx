import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { format } from 'date-fns';
import KpiCard from 'components/shared/KpiCard/KpiCard';
import DataTable from 'components/shared/DataTable/DataTable';
import AutoCompleteComponent from 'components/shared/AutoCompleteComponent/AutoCompleteComponent';
import { IAutoCompleteComponentProps } from 'components/shared/AutoCompleteComponent/AutoCompleteComponent.interface';
import {
	checkIn,
	checkOut,
	fetchTodayStats,
	fetchVisitsByDate,
} from 'redux/components/Attendance/sources';
import { fetchMembersSubscriptions } from 'redux/components/Members/sources';
import { throwErrorToast } from 'redux/utils/source.helper';
import { ICheckInPayload } from 'redux/components/Attendance';
import { generateTableData } from './AttendancePage.helper';
import { IAttendancePageProps } from './AttendancePage.interface';
import AttendancePageConnector from './AttendancePageConnector';
import './AttendancePage.css';

function AttendanceComponent(props: IAttendancePageProps) {
	const { visits, todayStats, membersForDropdown } = props;
	const dispatch = useDispatch();

	const today = format(new Date(), 'yyyy-MM-dd');
	const [selectedDate, setSelectedDate] = useState<string>(today);
	const [dialogOpen, setDialogOpen] = useState(false);
	const checkInPayload = useRef<ICheckInPayload>({
		userId: '',
		membershipId: '',
		attendeeType: 'MEMBER',
		markedBy: 'ADMIN',
		notes: ''
	});

	useEffect(() => {
		dispatch(fetchTodayStats());
		dispatch(fetchMembersSubscriptions());
	}, []);

	useEffect(() => {
		dispatch(fetchVisitsByDate(selectedDate));
	}, [selectedDate]);

	const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(e.target.value);
	};

	const onMemberSelect = (fieldKey: string, value: any) => {
		checkInPayload.current.membershipId = value ? value.id : '';
	};

	const onNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		checkInPayload.current.notes = e.target.value;
	};

	const onCheckInSubmit = () => {
		if (!checkInPayload.current.membershipId) {
			throwErrorToast({ statusText: 'Please select a member' });
			return;
		}
		dispatch(checkIn(checkInPayload.current));
		setDialogOpen(false);
		checkInPayload.current = { membershipId: '', markedBy: 'admin' };
	};

	const onCheckOut = (visitId: string) => {
		dispatch(checkOut(visitId));
	};

	const memberAutoCompleteProps: IAutoCompleteComponentProps = {
		key: 'member-checkin-autocomplete',
		label: 'MEMBER',
		placeholder: 'eg: John Doe',
		fieldKey: 'membershipId',
		isAsync: false,
		options: membersForDropdown,
		defaultValue: { id: '', name: '' },
		onSelection: onMemberSelect,
	};

	const tableProps = generateTableData(visits, onCheckOut, {
		showSearchBar: true,
		showLoadMore: false,
		searchBarProps: { placeholder: 'Search member...' },
	});

	return (
		<div className="attendance-page">
			{/* KPI Cards */}
			<Box className="attendance-kpi-row">
				<KpiCard title="Present Today" value={todayStats.presentToday} color="gray" />
				<KpiCard title="Currently Inside" value={todayStats.currentlyInside} color="gray" />
			</Box>

			{/* Controls Bar */}
			<Box className="attendance-controls">
				<Box display="flex" alignItems="center" gap={2}>
					<Typography variant="body1" fontWeight={500}>
						Date:
					</Typography>
					<TextField
						type="date"
						size="small"
						value={selectedDate}
						onChange={onDateChange}
						slotProps={{ htmlInput: { max: today } }}
					/>
				</Box>
				<Button
					variant="contained"
					color="primary"
					startIcon={<LoginIcon />}
					onClick={() => setDialogOpen(true)}
				>
					Check In Member
				</Button>
			</Box>

			<Divider sx={{ my: 2 }} />

			{/* Visits Table */}
			<DataTable {...tableProps} containerStyles={{ height: '480px' }} />

			{/* Check-In Dialog */}
			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				maxWidth="sm"
				fullWidth
			>
				<DialogTitle>Check In Member</DialogTitle>
				<DialogContent>
					<Stack spacing={3} mt={1}>
						<AutoCompleteComponent {...memberAutoCompleteProps} />
						<TextField
							label="Notes (optional)"
							placeholder="eg: Guest pass, trainer session..."
							size="small"
							fullWidth
							onChange={onNotesChange}
						/>
					</Stack>
				</DialogContent>
				<DialogActions sx={{ px: 3, pb: 2 }}>
					<Button onClick={() => setDialogOpen(false)} color="inherit">
						Cancel
					</Button>
					<Button onClick={onCheckInSubmit} variant="contained" color="primary">
						Confirm Check In
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const AttendancePage = AttendancePageConnector(AttendanceComponent);
export default AttendancePage;


