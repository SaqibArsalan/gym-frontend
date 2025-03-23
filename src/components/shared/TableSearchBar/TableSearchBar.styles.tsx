import { Fab, Select, selectClasses, TextField, Toolbar } from '@mui/material';

import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)({
	width: '100%',
	input: {
		padding: '10px 10px',
	},
});

export const StyledSelectField = styled(Select)(() => ({
	width: '100%',
	[`.${selectClasses.select}`]: {
		padding: '10px 10px',
	},
}));

export const StyledToolbar = styled(Toolbar)({
	padding: '20px',
});

export const CustomFab = styled(Fab)({
	position: 'absolute',
	top: '55px',
	right: 0,
});
