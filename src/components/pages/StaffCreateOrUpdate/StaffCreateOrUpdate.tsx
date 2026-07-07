import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {createStaff, fetchStaffDetail, updateStaff} from "../../../redux/components/Staff/sources";
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
    const [isReady, setIsReady] = useState<boolean>(false);

    const { usersByNameList, staffDetail } = props;
    const isEditMode = Boolean(params.staffId);

    const staffCreationPayload = useRef<IStaffCreation>({ ...emptyStaffCreationPayload });
    const hasPopulated = useRef<boolean>(false);

    // In edit mode: fetch the staff detail and pre-populate the form
    useEffect(() => {
        if (isEditMode && params.staffId) {
            dispatch(fetchStaffDetail(params.staffId));
        } else {
            setIsReady(true);
        }
    }, []);

    // Once staffDetail is loaded, pre-populate the payload and mark form as ready
    useEffect(() => {
        if (isEditMode && staffDetail && !hasPopulated.current) {
            hasPopulated.current = true;
            staffCreationPayload.current = {
                userId: staffDetail.userId,
                name: staffDetail.name,
                salary: staffDetail.salary,
                hireDate: staffDetail.hireDate,
            };
            setIsReady(true);
        }
    }, [staffDetail]);

    const onSubmit = () => {
        if (isEditMode && params.staffId) {
            dispatch(updateStaff(params.staffId, staffCreationPayload.current));
        } else {
            dispatch(createStaff(staffCreationPayload.current));
        }
    };

    const steps: IStep[] = [
        {
            id: 1,
            component: StaffInfoPage,
            componentProps: {
                activeStep,
                totalSteps,
                usersByNameList,
                isEditMode,
                continueText: 'Submit',
                staffCreationPayload: staffCreationPayload.current,
                onContinue: onSubmit,
            },
        },
    ];

    const selectedStep = steps.find((_, index: number) => index === activeStep);
    const ComponentToRender = selectedStep?.component;
    const componentProps = selectedStep?.componentProps || {};

    const pageTitle = isEditMode ? 'Edit Staff' : 'New Staff';
    const breadcrumb = isEditMode ? ['Staff', 'Edit Staff'] : ['Staff', 'New Staff'];

    return (
        <div className='creation-page'>
            <FormSubHeader
                title={pageTitle}
                breadCrumbTitles={breadcrumb}
            />
            {isReady && ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const StaffCreateOrUpdatePage = StaffCreateOrUpdateConnector(StaffCreateOrUpdateComponent)
export default StaffCreateOrUpdatePage;
