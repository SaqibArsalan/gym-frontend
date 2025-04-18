import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import "./SessionListingPage.css";
import {useDispatch} from "react-redux";
import { prepareRouteForNavigation } from 'utils/Route';
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom"; // Add styles
import {ISessionProps} from "./SessionListingPage.interface";
import SessionListingPageConnector from "./SessionListingPageConnector";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps, ITableBodyRow} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./SessionListingPageHelper";
import {fetchAllClasses} from "../../../redux/components/Gym Class/sources";
import {fetchAllSessions} from "../../../redux/components/Session/sources";

function SessionListing(props: ISessionProps) {
    const { sessionList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllSessions());
    }, []);

    const navigateToSessionDetail = useCallback((classId: string) => {
        const route = prepareRouteForNavigation(ROUTES.SESSION_DETAIL);
        navigate(`${route}/${classId}`, { replace: true });
    }, []);

    const navigateToSessionCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.SESSION_CREATE);
        navigate(route, { replace: true });
    }, []);

    const openSessionDetail = (value: ITableBodyRow) => {
        const { rowIndex } = value;
        if (rowIndex !== undefined) {
            const { id } = sessionList[rowIndex];
            navigateToSessionDetail(id);
        }
    };

    const tableProps: IDataTableProps = generateTableData(
        sessionList || [], {
            showLoadMore: false,
            showSearchBar: true,
            searchBarProps: {
                placeholder: 'Search Session',
                showAddButton: true,
                onAddButtonClick: navigateToSessionCreation,
                },
            // onRowClick: openSessionDetail,
        }
    );

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const SessionListingPage = SessionListingPageConnector(SessionListing)
export default SessionListingPage;

