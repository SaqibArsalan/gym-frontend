import { Dispatch } from 'react';
import { GymHttpClient } from 'redux/client';
import { throwErrorToast, throwSuccessToast } from 'redux/utils/source.helper';
import LoaderService from 'services/LoaderService';
import ROUTES from 'config/constants';
import { prepareRouteForNavigation } from 'utils/Route';
import NavigationService from 'services/NavigationService';
import { ENROLL_MEMBER_IN_SESSION } from '../Enrollment.constants';
import { ICreateEnrollment } from '../Enrollment.interface';

export const enrollMember =
	(payload: ICreateEnrollment) => async (dispatch: Dispatch<any>) => {
		const client = new GymHttpClient({ dispatchError: false });
		try {
			LoaderService.show();
			await client.post<void>(ENROLL_MEMBER_IN_SESSION, payload);
			LoaderService.hide();
			throwSuccessToast('Member enrolled successfully');

			setTimeout(() => {
				NavigationService.navigate(
					prepareRouteForNavigation(ROUTES.SESSION_LISTING)
				);
			}, 1000);
		} catch (e) {
			LoaderService.hide();
			throwErrorToast(e);
		}
	};

