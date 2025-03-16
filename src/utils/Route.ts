import ROUTES from 'config/constants';

export const prepareRouteForNavigation = (route: string) => {
	// const isMicroBuild = Boolean(process.env.MICRO_BUILD);
	let fullRoute = '';
	fullRoute += ROUTES.MODULE_ROOT + route;
	return fullRoute;
};
