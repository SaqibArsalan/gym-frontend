import OrderCancelledIcon from 'assets/images/order-cancelled.svg';
import OrderCompletedIcon from 'assets/images/order-completed.svg';
import OrderReturnedIcon from 'assets/images/order-returned.svg';
import OrderActiveIcon from 'assets/images/order-active.svg';
import { ORDER_FULFILLMENT_STATUSES } from 'config/enums';
import { IChildModuleInfo } from './interface';

const ROUTES = {
	ROOT: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	MEMBERSHIP_LISTING: '/memberships',
	MEMBER_CREATE: '/memberships-create',
	MEMBERSHIPS_DETAIL: '/memberships-detail',
	STAFF_LISTING: '/staff',
	STAFF_CREATE: '/staff-create',
	STAFF_DETAIL: '/staff-detail',
	USER_LISTING: '/users',
	USER_CREATE: '/user-create',
	MODULE_ROOT: '',
};

export const CHILD_MODULES_INFO: { [key: string]: IChildModuleInfo } = {
	// example: {
	// 	key: "example",
	// 	moduleKey: "example_module",
	// 	exposedMainComponent: "App",
	// 	routeUrl: '',
	// 	allowedRoles: [] // roles here //
	// }
};

export default ROUTES;

export const ORDER_LIST_FULLFILLMENT_ICON_TYPE = {
	[ORDER_FULFILLMENT_STATUSES.CANCELLED]: OrderCancelledIcon,
	[ORDER_FULFILLMENT_STATUSES.FULFILLED]: OrderCompletedIcon,
	[ORDER_FULFILLMENT_STATUSES.FULLY_DELIVERED]: OrderCompletedIcon,
	[ORDER_FULFILLMENT_STATUSES.PARTIAL_DELIVERED]: OrderReturnedIcon,
	[ORDER_FULFILLMENT_STATUSES.PARTIAL_RETURNED]: OrderReturnedIcon,
	[ORDER_FULFILLMENT_STATUSES.FULLY_RETURNED]: OrderReturnedIcon,
	[ORDER_FULFILLMENT_STATUSES.NOT_FULFILLED]: OrderActiveIcon,
};

export const ORDER_FULFILLMENT_STATUSES_MAP_MARKERS_COLORS = {
	[ORDER_FULFILLMENT_STATUSES.CANCELLED]: '#F2555E',
	[ORDER_FULFILLMENT_STATUSES.FULFILLED]: '#04BFA5',
	[ORDER_FULFILLMENT_STATUSES.FULLY_DELIVERED]: '#04BFA5',
	[ORDER_FULFILLMENT_STATUSES.PARTIAL_DELIVERED]: '#FF8A00',
	[ORDER_FULFILLMENT_STATUSES.PARTIAL_RETURNED]: '#FF8A00',
	[ORDER_FULFILLMENT_STATUSES.FULLY_RETURNED]: '#FF8A00',
	[ORDER_FULFILLMENT_STATUSES.NOT_FULFILLED]: '#69767B',
};
