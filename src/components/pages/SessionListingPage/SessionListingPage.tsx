import React, { useEffect, useCallback } from "react";
import { Button, Box } from "@mui/material";
import "./SessionListingPage.css";
import {useDispatch} from "react-redux";
import { prepareRouteForNavigation } from 'utils/Route';
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom";
import {ISessionProps} from "./SessionListingPage.interface";
import SessionListingPageConnector from "./SessionListingPageConnector";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./SessionListingPageHelper";
import {fetchAllSessions} from "../../../redux/components/Session/sources";

function SessionListing(props: ISessionProps) {
    const { sessionList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllSessions());
    }, []);

    const navigateToSessionCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.SESSION_CREATE);
        navigate(route, { replace: true });
    }, []);

    const navigateToEnrollMember = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.ENROLL_MEMBER);
        navigate(route, { replace: true });
    }, []);

    const tableProps: IDataTableProps = generateTableData(
        sessionList || [], {
            showLoadMore: false,
            showSearchBar: true,
            searchBarProps: {
                placeholder: 'Search Session',
                showAddButton: true,
                onAddButtonClick: navigateToSessionCreation,
            },
        }
    );

    return (
        <div>
            <Box display="flex" justifyContent="flex-end" mb={1}>
                <Button variant="contained" color="secondary" onClick={navigateToEnrollMember}>
                    Enroll Member
                </Button>
            </Box>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
}

const SessionListingPage = SessionListingPageConnector(SessionListing)
export default SessionListingPage;

