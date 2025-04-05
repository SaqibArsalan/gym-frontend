// Lib
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IRootState } from 'redux/rootReducer';

// State to bind
const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	staffDetail: state.staff.staffDetail,
	usersByNameList: state.user.usersByNameList
});

const UserCreateOrUpdateConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default UserCreateOrUpdateConnector;
