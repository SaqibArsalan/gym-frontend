import ToastService from 'services/ToastService';

export const throwErrorToast = (e: any) => {
	const text = e.statusText || e.errors[0];
	ToastService.error({ text });
};

export const throwSuccessToast = (text: string) => {
	console.log("text is ", text);
	ToastService.success({ text });
};