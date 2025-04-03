import {Box, Breadcrumbs, Button, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import ROUTES from "config/constants";
import {IStaffProps} from "../StaffPage/StaffPage.interface";
import {createStaff, fetchStaffDetail} from "../../../redux/components/Staff/sources";
import {prepareRouteForNavigation} from "../../../utils/Route";
import MemberCreateOrUpdateConnector from "./MemberCreateOrUpdateConnector";
import {IMemberCreateOrUpdateProps, IStep} from "./MemberCreateOrUpdate.interface";
import {totalSteps} from "./MemberCreateOrUpdateHelper";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {IMemberCreation} from "./MemberInfo/MemberInfo.interface";
import {emptyMemberCreationPayload} from "./MemberCreateOrUpdate.constants";
import MemberInfo from "./MemberInfo/MemberInfo";
import {createMember} from "../../../redux/components/Members/sources";


function MemberCreateOrUpdateComponent(props: IMemberCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { usersByNameList, membershipPlans } = props;

    const memberCreationPayload = useRef<IMemberCreation>(
        {
            ...emptyMemberCreationPayload,
        });

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        dispatch(createMember(memberCreationPayload.current));
    };

    const steps: IStep[] = [
        {
            id: 1,
            component: MemberInfo,
            componentProps: {
                activeStep,
                totalSteps,
                usersByNameList,
                membershipPlans,
                continueText: 'Submit',
                memberCreationPayload: memberCreationPayload.current,
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
                title='New Member'
                breadCrumbTitles={['Member', 'New Member']}
            />
            {ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const MemberCreateOrUpdatePage = MemberCreateOrUpdateConnector(MemberCreateOrUpdateComponent)
export default MemberCreateOrUpdatePage;
