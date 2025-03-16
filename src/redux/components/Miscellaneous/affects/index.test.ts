import miscellaneousInitialState from '../initalState';
import { IMiscellaneousInitialState } from '../Miscellaneous.interface';
import { fetchWarehousesSuccess } from './index';

describe('Misc affects tests', () => {
	describe('fetchWarehouseSuccess Tests', () => {
		it('fetchWarehouseSuccess should return state with list fetched', () => {
			const responseToCompare: IMiscellaneousInitialState = {
				...miscellaneousInitialState,
				warehouses: [],
			};
			const result = fetchWarehousesSuccess(
				{ ...miscellaneousInitialState },
				{
					type: 'test',
					payload: [],
				}
			);
			expect(result).toEqual(responseToCompare);
		});
	});
});
