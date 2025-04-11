// Lib
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IRootState } from 'redux/rootReducer';

// State to bind
const mapStateToProps = (state: IRootState) => ({
	auth: state.auth,
	staffDetail: state.staff.staffDetail,
	staffByNameList: state.staff.staffByNameList
});

const ClassCreateOrUpdateConnector = (component: React.ComponentType<any>) =>
	connect(mapStateToProps)(component as any);

export default ClassCreateOrUpdateConnector;
