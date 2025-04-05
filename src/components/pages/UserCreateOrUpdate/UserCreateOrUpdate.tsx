import {Box, Breadcrumbs, Button, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {IStaffProps} from "../StaffPage/StaffPage.interface";
import {createStaff, fetchStaffDetail} from "../../../redux/components/Staff/sources";
import {prepareRouteForNavigation} from "../../../utils/Route";
import UserCreateOrUpdateConnector from "./UserCreateOrUpdateConnector";
import {IUserCreateOrUpdateProps, IStep} from "./UserCreateOrUpdate.interface";
import {totalSteps} from "./UserCreateOrUpdateHelper";
import StaffInfoPage from "./StaffInfo/UserInfo";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {emptyUserCreationPayload} from "./UserCreateOrUpdate.constants";
import {IUserCreateOrUpdate} from "../../../redux/components/User";
import {createUser} from "../../../redux/components/User/sources";


function UserCreateOrUpdateComponent(props: IUserCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { usersByNameList } = props;

    const userCreationPayload = useRef<IUserCreateOrUpdate>(
        {
            ...emptyUserCreationPayload,
        });

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        dispatch(createUser(userCreationPayload.current));
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
                continueText: 'Submit',
                userCreationPayload: userCreationPayload.current,
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
                title='New User'
                breadCrumbTitles={['User', 'New User']}
            />
            {ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const StaffCreateOrUpdatePage = UserCreateOrUpdateConnector(UserCreateOrUpdateComponent)
export default StaffCreateOrUpdatePage;
