import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Box, Toolbar, Typography } from '@mui/material';
import './FormSubHeader.scss';

export interface IFormSubHeader {
	title: string;
	breadCrumbTitles: string[];
}

const FormSubHeader = (props: IFormSubHeader) => {
	const { title, breadCrumbTitles } = props;
	return (
		<Box className='form-sub-header'>
			<Toolbar>
				<Typography variant='h6' id='title' component='div'>
					{title || ''}
					<div role='presentation'>
						<Breadcrumbs
							separator={<NavigateNextIcon fontSize='small' />}
							aria-label='breadcrumb'
						>
							{breadCrumbTitles.map((subTitle, index) => (
								<Typography key={`sub-title-${index}`}>{subTitle}</Typography>
							))}
						</Breadcrumbs>
					</div>
				</Typography>
			</Toolbar>
		</Box>
	);
};

export default FormSubHeader;
