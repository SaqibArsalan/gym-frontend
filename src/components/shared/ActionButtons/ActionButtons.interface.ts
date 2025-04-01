export interface IActionButtons {
	totalSteps: number;
	activeStep: number;
	onBack?: () => void;
	onContinue?: () => void;
	onSubmit?:() => void;
	continueText?: string;
	submitText?:string;
	backText?: string;
	onCancel?: () => void;
	showCancel?: boolean;
}
