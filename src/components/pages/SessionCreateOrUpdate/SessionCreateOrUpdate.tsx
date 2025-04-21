import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import SessionCreateOrUpdateConnector from "./SessionCreateOrUpdateConnector";
import {ISessionCreateOrUpdateProps, IStep} from "./SessionCreateOrUpdate.interface";
import {totalSteps} from "./SessionCreateOrUpdateHelper";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {emptySessionCreationPayload} from "./SessionCreateOrUpdate.constants";
import {createClass} from "../../../redux/components/Gym Class/sources";
import SessionInfo from "./ClassInfo/SessionInfo";
import {ICreateOrUpdateSession} from "../../../redux/components/Session";
import {createSession} from "../../../redux/components/Session/sources";


function SessionCreateOrUpdateComponent(props: ISessionCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { staffByNameList, classListForDropdown } = props;

    const sessionCreationPayload = useRef<ICreateOrUpdateSession>(
        {
            ...emptySessionCreationPayload,
        });

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        dispatch(createSession(sessionCreationPayload.current, sessionCreationPayload.current.classId));
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
            component: SessionInfo,
            componentProps: {
                activeStep,
                totalSteps,
                staffByNameList,
                classListForDropdown,
                continueText: 'Submit',
                sessionCreationPayload: sessionCreationPayload.current,
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
                title='New Class'
                breadCrumbTitles={['Session', 'New Session']}
            />
            {ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const ClassCreateOrUpdatePage = SessionCreateOrUpdateConnector(SessionCreateOrUpdateComponent)
export default ClassCreateOrUpdatePage;
