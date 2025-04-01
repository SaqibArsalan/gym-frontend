import { Button } from '@mui/material';
import React from 'react';
import { IActionButtons } from './ActionButtons.interface';

import styles from './ActionButtons.module.scss';

function ActionButtons(props: IActionButtons) {
	const {
		totalSteps,
		activeStep,
		onBack,
		onContinue,
		continueText,
		backText,
		onSubmit,
		submitText,
	} = props;
	return (
		<div className={styles.actionWrapper} data-testid='action-wrapper'>
			{activeStep ? (
				<Button
					id={styles.actionsBackButton}
					data-testid='actions-back-button'
					variant='outlined'
					onClick={onBack}
				>
					{backText || 'Back'}
				</Button>
			) : null}
			{activeStep <= totalSteps - 1 ? (
				<Button
					id={styles.actionsContinueButton}
					data-testid='actions-continue-button'
					color='primary'
					variant='contained'
					onClick={onContinue}
				>
					{continueText || 'Continue'}
				</Button>
			) : (
				<Button
					id={styles.actionsSubmitButton}
					data-testid='actions-submit-button'
					variant='contained'
					onClick={onSubmit}
				>
					{submitText || 'Submit'}
				</Button>
			)}
		</div>
	);
}

export default ActionButtons;
