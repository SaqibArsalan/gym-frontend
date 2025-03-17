import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardPage.css";
import {useDispatch} from "react-redux";
import KpiCard from "../../shared/KpiCard/KpiCard";
import {fetchActiveMembersCount} from "../../../redux/components/Miscellaneous/sources";
import {IDashboardProps} from "./DashboardPage.interface";
import DashboardPageConnector from "./DashboardPageConnector"; // Add styles

function Dashboard(props: IDashboardProps) {
    const [activeMembers, setActiveMembers] = useState<number | null>(null);
    const { activeMembersCount } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActiveMembersCount());
    }, []);

    return (
        <div className="dashboard">
            <KpiCard title="Number of Members" value={activeMembersCount ?? 0} color="gray" />
            <KpiCard title="Total Schedules" value={3} color="gray" />
            <KpiCard title="Bookings" value={7} color="gray" />
        </div>
    );
};

const DashboardPage = DashboardPageConnector(Dashboard)
export default DashboardPage;

