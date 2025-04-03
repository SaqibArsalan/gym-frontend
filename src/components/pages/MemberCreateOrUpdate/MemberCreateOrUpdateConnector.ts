// Lib
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IRootState } from 'redux/rootReducer';
import {fetchMembershipPlans} from "../../../redux/components/Members/sources";

// State to bind
const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	membershipPlans: state.members.membershipPlans,
	usersByNameList: state.user.usersByNameList
});

const MemberCreateOrUpdateConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default MemberCreateOrUpdateConnector;
