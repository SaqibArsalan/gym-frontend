import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'redux/rootReducer';
import { normalizeMembersForDropdown } from 'redux/components/Members/normalizers';

const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	sessionListForDropdown: state.session.sessionListForDropdown,
	membersSubscriptionsForDropdown: normalizeMembersForDropdown(
		state.members.membersSubscriptions
	),
});

const EnrollMemberPageConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default EnrollMemberPageConnector;

