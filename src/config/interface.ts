import { Theme } from '@mui/material';
import { ROLES } from './enums';

export interface IChildModuleInfo {
	key: string;
	moduleKey: string;
	routeUrl: string;
	exposedMainComponent: string;
	allowedRoles: ROLES[];
}

export interface IAppProps {
	mainTheme?: Theme;
}
