import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import "./UserPage.css";
import {useDispatch} from "react-redux";
import { prepareRouteForNavigation } from 'utils/Route';
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom"; // Add styles
import KpiCard from "../../shared/KpiCard/KpiCard";
import {IUserProps} from "./UserPage.interface";
import UserPageConnector from "./UserPageConnector";
import {fetchMembersSubscriptions} from "../../../redux/components/Members/sources";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps, ITableBodyRow} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./UserPageHelper";
import {fetchStaffList} from "../../../redux/components/Staff/sources";
import {fetchAllUsers} from "../../../redux/components/User/sources";

function Staff(props: IUserProps) {
    const { userList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    const navigateToUserDetail = useCallback((userId: string) => {
        const route = prepareRouteForNavigation(ROUTES.USER_DETAIL);
        navigate(`${route}/${userId}`, { replace: true });
    }, []);

    const navigateToUserCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.USER_CREATE);
        navigate(route, { replace: true });
    }, []);

    const openUserDetail = (value: ITableBodyRow) => {
        const { rowIndex } = value;
        if (rowIndex !== undefined) {
            const { id } = userList[rowIndex];
            navigateToUserDetail(id);
        }
    };

    const tableProps: IDataTableProps = generateTableData(
        userList || [], {
            showLoadMore: false,
            showSearchBar: true,
            searchBarProps: {
                placeholder: 'Search User',
                showAddButton: true,
                onAddButtonClick: navigateToUserCreation,
                },
            onRowClick: openUserDetail,
        }
    );

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const UserPage = UserPageConnector(Staff)
export default UserPage;

