import React, { Component } from 'react';
import LoaderService from '../index';
import { ILoaderParams } from '../LoaderService.interface';

type LoaderRootState = {
	loader: ILoaderParams;
};

class LoaderRoot extends Component<any, LoaderRootState> {
	state: LoaderRootState = {
		loader: {},
	};

	componentDidMount() {
		LoaderService.on('showLoader', (params: ILoaderParams) => {
			this.setState({
				loader: params,
			});
		});

		LoaderService.on('hideLoader', (params: ILoaderParams) => {
			this.setState({
				loader: {},
			});
		});
	}

	render() {
		const { loader } = this.state;
		const LoaderComponent = loader.component;
		return LoaderComponent ? (
			<section className='loader-wrapper'>
				<LoaderComponent />
			</section>
		) : null;
	}
}

export default LoaderRoot;
