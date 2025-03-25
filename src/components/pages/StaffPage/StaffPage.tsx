import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StaffPage.css";
import {useDispatch} from "react-redux";
import KpiCard from "../../shared/KpiCard/KpiCard";
import {IStaffProps} from "./StaffPage.interface";
import StaffPageConnector from "./StaffPageConnector";
import {fetchMembersSubscriptions} from "../../../redux/components/Members/sources";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./StaffPageHelper";
import {fetchStaffList} from "../../../redux/components/Staff/sources"; // Add styles

function Staff(props: IStaffProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const { staffList } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStaffList());
    }, []);

    const otherProps: IDataTableProps = {
        showLoadMore: false,
        showSearchBar: false,
    } as any;

    let tableProps: IDataTableProps = generateTableData(
        staffList || []
    );
    tableProps = { ...tableProps, ...otherProps };

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const StaffPage = StaffPageConnector(Staff)
export default StaffPage;

