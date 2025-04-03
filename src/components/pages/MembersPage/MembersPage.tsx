import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import "./MembersPage.css";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom"; // Add styles
import KpiCard from "../../shared/KpiCard/KpiCard";
import {IMembersProps} from "./MembersPage.interface";
import MembersPageConnector from "./MembersPageConnector";
import {fetchMembersSubscriptions} from "../../../redux/components/Members/sources";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps, ITableBodyRow} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./MembersPageHelper";
import {prepareRouteForNavigation} from "../../../utils/Route";

function Members(props: IMembersProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const { membersSubscriptions} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMembersSubscriptions());
    }, []);

    const navigateToMemberDetail = useCallback((memberId: string) => {
        const route = prepareRouteForNavigation(ROUTES.MEMBERSHIPS_DETAIL);
        navigate(`${route}/${memberId}`, { replace: true });
    }, []);

    const navigateToMemberCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.MEMBER_CREATE);
        navigate(route, { replace: true });
    }, []);

    const openMemberDetail = (value: ITableBodyRow) => {
        const { rowIndex } = value;
        if (rowIndex !== undefined) {
            const { membershipId } = membersSubscriptions[rowIndex];
            navigateToMemberDetail(membershipId);
        }
    };

    const otherProps: IDataTableProps = {
        showLoadMore: false,
        showSearchBar: true,
        searchBarProps: {
            placeholder: 'Search Member',
            showAddButton: true,
            onAddButtonClick: navigateToMemberCreation
        },

    } as any;

    let tableProps: IDataTableProps = generateTableData(
        membersSubscriptions || [],
        {
            onRowClick: openMemberDetail
        }
    );

    tableProps = { ...tableProps, ...otherProps };

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const MembersPage = MembersPageConnector(Members)
export default MembersPage;

