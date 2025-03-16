import React from 'react';
import { INavigationService } from './Navigation.interface';

// Class
class NavigationService implements INavigationService {
	on = (event: string, callback: Function) => {
		document.addEventListener(event, (e: any) => callback(e.detail));
	};

	off = (event: string, callback: Function) => {
		document.removeEventListener(event, (e: any) => callback(e.detail));
	};

	navigate = (route: string) => {
		document.dispatchEvent(new CustomEvent('navigate-url', { detail: route }));
	};
}

export default new NavigationService();
