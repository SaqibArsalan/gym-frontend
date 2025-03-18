// Lib
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IRootState } from 'redux/rootReducer';

// State to bind
const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	activeMembersCount: state.miscellaneous.activeMembersCount,
	activeSubscriptionsCount: state.miscellaneous.activeSubscriptionsCount,
	newSignupsCount: state.miscellaneous.newSignupsCount
});

const LoginConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default LoginConnector;
