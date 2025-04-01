import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './FieldWrapper.module.scss';
import { IFieldWrapper } from './FieldWrapper.interface';

export const FieldWrapperComponent = (props: IFieldWrapper) => {
	const { heading, infoWidth, containerColumns, subHeading, children } = props;
	return (
		<Grid
			container
			columns={containerColumns || 12}
			id={styles.fieldWrapperContainer}
		>
			<Grid item className={styles.infoContainer} xs={infoWidth || 3}>
				<Typography className={styles.heading} component='p'>
					{heading || 'Not Available'}
				</Typography>
				<Typography className={styles.subHeading} component='p'>
					{subHeading || 'Not Available'}
				</Typography>
			</Grid>
			<Grid item xs={1} />
			<Grid item className={styles.children} xs={6}>
				{children}
			</Grid>
		</Grid>
	);
};

export const FieldWrapper =
	(
		ComponentsToRender: Array<React.FunctionComponent>,
		wrapperProps: IFieldWrapper
	) =>
	(props: { componentProps: any[] }) => {
		const {
			heading,
			fieldLabel,
			infoWidth,
			containerColumns,
			fieldPlaceholder,
			subHeading,
		} = wrapperProps;
		const { componentProps } = props;
		return (
			<Grid
				container
				columns={containerColumns || 12}
				id={styles.fieldWrapperContainer}
			>
				<Grid item className={styles.infoContainer} xs={infoWidth || 3}>
					<Typography className={styles.heading} component='p'>
						{heading || 'Not Available'}
					</Typography>
					<Typography className={styles.subHeading} component='p'>
						{subHeading || 'Not Available'}
					</Typography>
				</Grid>
				<Grid item xs={1} />
				{ComponentsToRender.map((ComponentToRender, index) => {
					const renderedComponentProps = componentProps[index];
					return (
						<Grid
							item
							className={styles.children}
							xs={renderedComponentProps.itemWidth || 6}
							style={renderedComponentProps.styles || {}}
						>
							<ComponentToRender
								label={fieldLabel}
								placeholder={fieldPlaceholder}
								{...renderedComponentProps}
							/>
						</Grid>
					);
				})}
			</Grid>
		);
	};
