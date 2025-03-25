// Lib
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IRootState } from 'redux/rootReducer';

// State to bind
const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	staffList: state.staff.staffList
});

const StaffPageConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default StaffPageConnector;
