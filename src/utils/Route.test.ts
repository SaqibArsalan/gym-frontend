import ROUTES from 'config/constants';
import { prepareRouteForNavigation } from './Route';


describe('Route Utils Tests', () => {
	it('prepareRouteForNavigation should return empty string if route is empty and build is not micro', () => {
        expect(prepareRouteForNavigation('')).toBe('');
	});
    it('prepareRouteForNavigation should return root Route string if route is empty and build is micro', () => {
        process.env.MICRO_BUILD = "true";
        expect(prepareRouteForNavigation('')).toBe(ROUTES.MODULE_ROOT);
	});

    it('prepareRouteForNavigation should return full Route string if route is not empty and build is micro', () => {
        process.env.MICRO_BUILD = "true";
        expect(prepareRouteForNavigation('/test')).toBe(`${ROUTES.MODULE_ROOT}/test`);
	});
});
