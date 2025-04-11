import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import ClassCreateOrUpdateConnector from "./ClassCreateOrUpdateConnector";
import {IClassCreateOrUpdateProps, IStep} from "./ClassCreateOrUpdate.interface";
import {totalSteps} from "./ClassCreateOrUpdateHelper";
import FormSubHeader from "../../shared/FormSubHeader/FormSubHeader";
import {emptyClassCreationPayload} from "./ClassCreateOrUpdate.constants";
import {ICreateOrUpdateClass} from "../../../redux/components/Gym Class";
import {createClass} from "../../../redux/components/Gym Class/sources";
import ClassInfo from "./ClassInfo/ClassInfo";


function ClassCreateOrUpdateComponent(props: IClassCreateOrUpdateProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { staffByNameList } = props;

    const classCreationPayload = useRef<ICreateOrUpdateClass>(
        {
            ...emptyClassCreationPayload,
        });

    const onContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const onBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onSubmit = () => {
        dispatch(createClass(classCreationPayload.current));
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
            component: ClassInfo,
            componentProps: {
                activeStep,
                totalSteps,
                staffByNameList,
                continueText: 'Submit',
                classCreationPayload: classCreationPayload.current,
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
                breadCrumbTitles={['Class', 'New Class']}
            />
            {ComponentToRender ? <ComponentToRender {...componentProps} /> : null}
        </div>
    );
}

const ClassCreateOrUpdatePage = ClassCreateOrUpdateConnector(ClassCreateOrUpdateComponent)
export default ClassCreateOrUpdatePage;
