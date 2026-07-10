
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import MemberCreateOrUpdateConnector from "./MemberCreateOrUpdateConnector";
import {IMemberCreateOrUpdateProps, IStep} from "./MemberCreateOrUpdate.interface";
import {totalSteps} from "./MemberCreateOrUpdateHelper";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {IMemberCreation} from "./MemberInfo/MemberInfo.interface";
import {emptyMemberCreationPayload} from "./MemberCreateOrUpdate.constants";
import MemberInfo from "./MemberInfo/MemberInfo";
import {createMember, fetchMemberDetail, updateMember} from "../../../redux/components/Members/sources";


function MemberCreateOrUpdateComponent(props: IMemberCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isReady, setIsReady] = useState<boolean>(false);

    const { usersByNameList, membershipPlans, memberDetail } = props;
    const isEditMode = Boolean(params.memberId);
    const hasPopulated = useRef<boolean>(false);

    // In edit mode: fetch the member detail and pre-populate the form
    useEffect(() => {
        if (isEditMode && params.memberId) {
            dispatch(fetchMemberDetail(params.memberId));
        } else {
            setIsReady(true);
        }
    }, []);

    const memberCreationPayload = useRef<IMemberCreation>(
        {
            ...emptyMemberCreationPayload,
        });

    // Once memberDetail is loaded, pre-populate the payload and mark form as ready
    useEffect(() => {
        if (isEditMode && memberDetail && !hasPopulated.current) {
            hasPopulated.current = true;
            memberCreationPayload.current = {
                userId: memberDetail.userId,
                membershipPlanId: memberDetail.membershipPlanId,
                memberName: memberDetail.memberName,
                joinDate: memberDetail.joinDate,
                durationInMonths: memberDetail.durationInMonths,
            };
            setIsReady(true);
        }
    }, [memberDetail]);

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        if (isEditMode && params.memberId) {
            dispatch(updateMember(params.memberId, memberCreationPayload.current));
        } else {
            dispatch(createMember(memberCreationPayload.current));
        }
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
                isEditMode,
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
                title={isEditMode ? 'Edit Member' : 'New Member'}
                breadCrumbTitles={isEditMode ? ['Member', 'Edit Member'] : ['Member', 'New Member']}
            />
            {isReady && ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const MemberCreateOrUpdatePage = MemberCreateOrUpdateConnector(MemberCreateOrUpdateComponent)
export default MemberCreateOrUpdatePage;
