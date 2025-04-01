import React from "react";
import LoaderComponent from "../Loader/Loader";
import { IDynamicModuleInfo } from "./DynamicModuleLoader.interface";

// adding Module in webpack shared scope
function loadComponent(scope: string, module: string) {
	return async () => {
	  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
	  // @ts-ignore 
    // eslint-disable-next-line
	  await __webpack_init_sharing__('default');
	  const container = (window as any)[scope]; // or get the container somewhere else
	  // Initialize the container, it may provide shared modules
	  // @ts-ignore
    // eslint-disable-next-line
	  await container.init(__webpack_share_scopes__.default);
	  // @ts-ignore
	  const factory = await window[scope].get(module);
	  const Module = factory();
	  return Module;
	};
}

function checkifScriptIsAlreadyLoaded(url: string) {
  return !!document.querySelector(`script[src='${url}']`);
}


// script hook for adding script tag and to initiate the loading
const useDynamicScript = (args: { url: string }) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => {
      if (!args.url) {
        return;
      }

      if(checkifScriptIsAlreadyLoaded(args.url)) {
        setReady(true);
        setFailed(false);
        return;
      }
  
      const element = document.createElement('script');
  
      element.src = args.url;
      element.type = 'text/javascript';
      element.async = true;
  
      setReady(false);
      setFailed(false);
  
      element.onload = () => {
        // eslint-disable-next-line
        setReady(true);
      };
  
      element.onerror = () => {
        // eslint-disable-next-line
        setReady(false);
        setFailed(true);
      };
  
      document.head.appendChild(element);
    }, [args.url]);
  
    return {
      ready,
      failed,
    };
  };

  // Asynchronous loading of Module with React Lazy and Suspense
  const DynamicModuleLoader = (props: { system: IDynamicModuleInfo, additionalModuleProps?: any }) => {
    const { system, additionalModuleProps } = props;
    const { ready, failed } = useDynamicScript({
      url: system && system.url,
    });
  
    if (!system || failed || !system.url) {
      return <h6>Failed to Load Module, Please refresh and try again</h6>;
    }
  
    if (!ready) {
      return <LoaderComponent />;
    }
  
    const Component = React.lazy(loadComponent(system.scope, system.module));
  
    return (
      <React.Suspense fallback={<LoaderComponent />}>
        <Component {...(additionalModuleProps || {})} />
      </React.Suspense>
    );
  }

  DynamicModuleLoader.defaultProps = {
    additionalModuleProps: {},
  }


  // HOC for module loading component ( specially used in routes )
  export const loadDynamicModuleHoc = (system: IDynamicModuleInfo, additionalModuleProps?: any) => () => (
    <DynamicModuleLoader system={system} additionalModuleProps={additionalModuleProps} />
  )

  export default DynamicModuleLoader;
