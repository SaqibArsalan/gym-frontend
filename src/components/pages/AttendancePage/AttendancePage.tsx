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
	FormControl,
	InputLabel,
	MenuItem,
	Select,
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
import { fetchAllUsers } from 'redux/components/User/sources';
import { throwErrorToast } from 'redux/utils/source.helper';
import { AttendeeType, ICheckInPayload } from 'redux/components/Attendance';
import { generateTableData } from './AttendancePage.helper';
import { IAttendancePageProps } from './AttendancePage.interface';
import AttendancePageConnector from './AttendancePageConnector';
import './AttendancePage.css';

const ATTENDEE_TYPE_OPTIONS: { label: string; value: AttendeeType }[] = [
	{ label: 'Member', value: 'MEMBER' },
	{ label: 'Staff', value: 'STAFF' },
];

function AttendanceComponent(props: IAttendancePageProps) {
	const { visits, todayStats, usersForDropdown } = props;
	const dispatch = useDispatch();

	const today = format(new Date(), 'yyyy-MM-dd');
	const [selectedDate, setSelectedDate] = useState<string>(today);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [attendeeType, setAttendeeType] = useState<AttendeeType>('MEMBER');

	const checkInPayload = useRef<ICheckInPayload>({
		userId: '',
		attendeeType: 'MEMBER',
		markedBy: 'ADMIN',
		notes: '',
	});

	useEffect(() => {
		dispatch(fetchTodayStats());
		dispatch(fetchAllUsers());
	}, []);

	useEffect(() => {
		dispatch(fetchVisitsByDate(selectedDate));
	}, [selectedDate]);

	const onDialogOpen = () => {
		setAttendeeType('MEMBER');
		checkInPayload.current = { userId: '', attendeeType: 'MEMBER', markedBy: 'ADMIN', notes: '' };
		setDialogOpen(true);
	};

	const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(e.target.value);
	};

	const onAttendeeTypeChange = (value: AttendeeType) => {
		setAttendeeType(value);
		checkInPayload.current.attendeeType = value;
		checkInPayload.current.userId = '';
	};

	const onUserSelect = (fieldKey: string, value: any) => {
		checkInPayload.current.userId = value ? value.id : '';
	};

	const onNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		checkInPayload.current.notes = e.target.value;
	};

	const onCheckInSubmit = () => {
		if (!checkInPayload.current.userId) {
			throwErrorToast({ statusText: 'Please select a user' });
			return;
		}
		dispatch(checkIn(checkInPayload.current));
		setDialogOpen(false);
	};

	const onCheckOut = (visitId: string) => {
		dispatch(checkOut(visitId));
	};

	const userAutoCompleteProps: IAutoCompleteComponentProps = {
		key: `checkin-autocomplete-${attendeeType}`,
		label: attendeeType === 'MEMBER' ? 'MEMBER' : 'STAFF',
		placeholder: 'eg: John Doe',
		fieldKey: 'userId',
		isAsync: false,
		options: usersForDropdown,
		defaultValue: { id: '', name: '' },
		onSelection: onUserSelect,
	};

	const tableProps = generateTableData(visits, onCheckOut, usersForDropdown, {
		showSearchBar: true,
		showLoadMore: false,
		searchBarProps: { placeholder: 'Search user...' },
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
					onClick={onDialogOpen}
				>
					Check In User
				</Button>
			</Box>

			<Divider sx={{ my: 2 }} />

			{/* Visits Table */}
			<DataTable {...tableProps} containerStyles={{ height: '480px' }} />

			{/* Check-In Dialog */}
			<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
				<DialogTitle>Check In User</DialogTitle>
				<DialogContent>
					<Stack spacing={3} mt={1}>
						<FormControl size="small" fullWidth>
							<InputLabel>Attendee Type</InputLabel>
							<Select
								value={attendeeType}
								label="Attendee Type"
								onChange={(e) => onAttendeeTypeChange(e.target.value as AttendeeType)}
							>
								{ATTENDEE_TYPE_OPTIONS.map((opt) => (
									<MenuItem key={opt.value} value={opt.value}>
										{opt.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<AutoCompleteComponent {...userAutoCompleteProps} />

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

