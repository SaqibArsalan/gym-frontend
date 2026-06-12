import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'redux/rootReducer';
import { normalizeUsersByName } from 'redux/components/User/normalizers';

const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	visits: state.attendance.visits,
	todayStats: state.attendance.todayStats,
	usersForDropdown: normalizeUsersByName(state.user.usersList),
});

const AttendancePageConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default AttendancePageConnector;
