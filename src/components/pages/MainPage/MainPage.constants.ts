import React from 'react';
import ROUTES from 'config/constants';
import { prepareRouteForNavigation } from 'utils/Route';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IHEADER_LINKS_INFO } from './MainPage.interface';

const linkNavigationHandler =
	(navigate: Function, item: IHEADER_LINKS_INFO) =>
	(event: React.MouseEvent<any>) => {
		navigate(item.route, { replace: !!item.isReplaceRoute });
	};

export const HEADER_LINKS_INFO: IHEADER_LINKS_INFO[] = [
	{
		label: 'Control Tower',
		default: true,
		icon: ShoppingCartIcon,
		route: prepareRouteForNavigation(ROUTES.TOURS),
		isReplaceRoute: false,
		onClick: linkNavigationHandler,
	},
];
