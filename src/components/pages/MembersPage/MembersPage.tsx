import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MembersPage.css";
import {useDispatch} from "react-redux";
import KpiCard from "../../shared/KpiCard/KpiCard";
import {IMembersProps} from "./MembersPage.interface";
import MembersPageConnector from "./MembersPageConnector";
import {fetchMembersSubscriptions} from "../../../redux/components/Members/sources";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./MembersPageHelper"; // Add styles

function Members(props: IMembersProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const { membersSubscriptions} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMembersSubscriptions());
    }, []);

    const otherProps: IDataTableProps = {
        showLoadMore: false,
        showSearchBar: false,
    } as any;

    let tableProps: IDataTableProps = generateTableData(
        membersSubscriptions || []
    );
    tableProps = { ...tableProps, ...otherProps };

    return (
        <div className="dashboard">
            <DataTable {...tableProps} containerStyles={{ height: '500px', width: '1200px' }} />
        </div>
    );
};

const MembersPage = MembersPageConnector(Members)
export default MembersPage;

