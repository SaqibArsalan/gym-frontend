export interface INavigationService {
	on: (event: string, callback: Function) => void;
	off: (event: string, callback: Function) => void;
	navigate: (route: string) => void;
}
