import React, { Component } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './ToastComponent.scss';
import { IToastProps } from '../ToastService.interface';

const Alert = (props: any, ref: any) => (
	<MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
);

const StyledAlert = React.forwardRef(Alert);

const ToastComponent = (props: IToastProps) => {
	const { closeToastHandler, toastTypeClass, text } = props;
	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open
				onClose={closeToastHandler}
			>
				<StyledAlert
					onClose={closeToastHandler}
					severity={toastTypeClass}
					sx={{ width: '100%' }}
				>
					{text}
				</StyledAlert>
			</Snackbar>
		</div>
	);
};

export default ToastComponent;
