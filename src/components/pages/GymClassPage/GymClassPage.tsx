import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import "./GymClassPage.css";
import {useDispatch} from "react-redux";
import { prepareRouteForNavigation } from 'utils/Route';
import ROUTES from "config/constants";
import {useNavigate} from "react-router-dom"; // Add styles
import {IGymClassProps} from "./GymClassPage.interface";
import GymClassPageConnector from "./GymClassPageConnector";
import DataTable from "../../shared/DataTable/DataTable";
import {IDataTableProps, ITableBodyRow} from "../../shared/DataTable/DataTable.interface";
import {generateTableData} from "./GymClassPageHelper";
import {fetchAllClasses} from "../../../redux/components/Gym Class/sources";

function GymClass(props: IGymClassProps) {
    const { classList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllClasses());
    }, []);

    const navigateToClassDetail = useCallback((classId: string) => {
        const route = prepareRouteForNavigation(ROUTES.CLASS_DETAIL);
        navigate(`${route}/${classId}`, { replace: true });
    }, []);

    const navigateToClassCreation = useCallback(() => {
        const route = prepareRouteForNavigation(ROUTES.CLASS_CREATE);
        navigate(route, { replace: true });
    }, []);

    const openClassDetail = (value: ITableBodyRow) => {
        const { rowIndex } = value;
        if (rowIndex !== undefined) {
            const { id } = classList[rowIndex];
            navigateToClassDetail(id);
        }
    };

    const tableProps: IDataTableProps = generateTableData(
        classList || [], {
            showLoadMore: false,
            showSearchBar: true,
            searchBarProps: {
                placeholder: 'Search Class',
                showAddButton: true,
                onAddButtonClick: navigateToClassCreation,
                },
            onRowClick: openClassDetail,
        }
    );

    return (
        <div>
            <DataTable {...tableProps} containerStyles={{ height: '500px'}} />
        </div>
    );
};

const GymClassPage = GymClassPageConnector(GymClass)
export default GymClassPage;

