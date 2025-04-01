import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import "./StaffPage.css";
import {useDispatch} from "react-redux";
import { prepareRouteForNavigation } from 'utils/Route';
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom"; // Add styles
import KpiCard from "../../shared/KpiCard/KpiCard";
import {IStaffProps} from "./StaffPage.interface";
import StaffPageConnector from "./StaffPageConnector";
import {fetchMembersSubscriptions} from "../../../redux/components/Members/sources";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps, ITableBodyRow} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./StaffPageHelper";
import {fetchStaffList} from "../../../redux/components/Staff/sources";

function Staff(props: IStaffProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const { staffList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchStaffList());
    }, []);

    const navigateToStaffDetail = useCallback((userId: string) => {
        const route = prepareRouteForNavigation(ROUTES.STAFF_DETAIL);
        navigate(`${route}/${userId}`, { replace: true });
    }, []);

    const navigateToStaffCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.STAFF_CREATE);
        navigate(route, { replace: true });
    }, []);

    const openStaffDetail = (value: ITableBodyRow) => {
        const { rowIndex } = value;
        if (rowIndex !== undefined) {
            const { userId } = staffList[rowIndex];
            navigateToStaffDetail(userId);
        }
    };

    const tableProps: IDataTableProps = generateTableData(
        staffList || [], {
            showLoadMore: false,
            showSearchBar: true,
            searchBarProps: {
                placeholder: 'Search Staff',
                showAddButton: true,
                onAddButtonClick: navigateToStaffCreation,
                },
            onRowClick: openStaffDetail,
        }
    );

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const StaffPage = StaffPageConnector(Staff)
export default StaffPage;

