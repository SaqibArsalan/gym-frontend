import {Box, Breadcrumbs, Button, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {IStaffProps} from "../StaffPage/StaffPage.interface";
import {createStaff, fetchStaffDetail} from "../../../redux/components/Staff/sources";
import {prepareRouteForNavigation} from "../../../utils/Route";
import StaffCreateOrUpdateConnector from "./StaffCreateOrUpdateConnector";
import {IStaffCreateOrUpdateProps, IStep} from "./StaffCreateOrUpdate.interface";
import {totalSteps} from "./StaffCreateOrUpdateHelper";
import StaffInfoPage from "./StaffInfo/StaffInfo";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {IStaffCreation} from "./StaffInfo/StaffInfo.interface";
import {emptyStaffCreationPayload} from "./StaffCreateOrUpdate.constants";


function StaffCreateOrUpdateComponent(props: IStaffCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { usersByNameList } = props;

    const staffCreationPayload = useRef<IStaffCreation>(
        {
            ...emptyStaffCreationPayload,
        });

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        dispatch(createStaff(staffCreationPayload.current));
        // if (invoiceDetails) {
        //     dispatch(updateInvoiceDetails(invoiceDetails.id, invoiceCreationPayload.current));
        //
        // } else {
        //     dispatch(createInvoice(invoiceCreationPayload.current));
        // }

    };

    const steps: IStep[] = [
        {
            id: 1,
            component: StaffInfoPage,
            componentProps: {
                activeStep,
                totalSteps,
                usersByNameList,
                continueText: 'Submit',
                staffCreationPayload: staffCreationPayload.current,
                onContinue: onSubmit,
            },
        },
    ];

    const selectedStep = steps.find((_, index: number) => index === activeStep);
    const ComponentToRender = selectedStep?.component;
    const componentProps = selectedStep?.componentProps || {};

    return (
        <div className='creation-page'>
            <FormSubHeader
                title='New Staff'
                breadCrumbTitles={['Staff', 'New Staff']}
            />
            {ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const StaffCreateOrUpdatePage = StaffCreateOrUpdateConnector(StaffCreateOrUpdateComponent)
export default StaffCreateOrUpdatePage;
