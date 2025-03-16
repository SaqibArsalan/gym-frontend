import { Dispatch } from 'react';
import { GymHttpClient } from 'redux/client';
import LoaderService from 'services/LoaderService';
import * as SourceHelpers from 'redux/utils/source.helper';
import NavigationService from 'services/NavigationService';
import * as RouteHelper from 'utils/Route';
import ROUTES from 'config/constants';
import { actions } from '../index';
import * as sources from './index';

const promiseResolverMock = jest.fn().mockReturnValue(Promise.resolve());

jest.mock(
	'redux/client',
	jest.fn().mockImplementation(() => ({
		BazaarHttpClient: jest.fn().mockImplementation(() => ({
			put: promiseResolverMock,
			get: promiseResolverMock,
			post: promiseResolverMock,
			delete: promiseResolverMock,
		})),
	}))
);

const loaderServiceMockShowSpy = jest.spyOn(LoaderService, 'show');
const loaderServiceMockHideSpy = jest.spyOn(LoaderService, 'hide');

const navigateMock = jest.spyOn(NavigationService, 'navigate');

const errorToastMock = jest.spyOn(SourceHelpers, 'throwErrorToast');
const successToastMock = jest.spyOn(SourceHelpers, 'throwSuccessToast');

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
const dispatchMock: Dispatch<any> = jest.fn();

afterEach(() => {
	jest.clearAllMocks();
});

describe('fetchWarehouseData Tests', () => {
	it('fetchWarehouseData success flow', async () => {
		const fetchWarehousesSuccessMock = jest.spyOn(
			actions,
			'fetchWarehousesSuccess'
		);

		const fetchWarehouseListMock = jest
			.spyOn(sources, 'fetchWarehouseList')
			.mockReturnValue(Promise.resolve([]));

		sources.fetchWarehouseData()(dispatchMock);
		await Promise.all([fetchWarehouseListMock.mock.results[0].value]);
		expect(fetchWarehousesSuccessMock).toBeCalled();
	});
	it('fetchWarehouseData fail flow', done => {
		const fetchWarehouseListMock = jest
			.spyOn(sources, 'fetchWarehouseList')
			.mockReturnValue(
				// eslint-disable-next-line prefer-promise-reject-errors
				Promise.reject({
					statusText: 'testing',
				})
			);

		sources.fetchWarehouseData()(dispatchMock);
		Promise.all([fetchWarehouseListMock.mock.results[0].value]).catch(() => {
			expect(errorToastMock).toBeCalled();
			done();
		});
	});
});
