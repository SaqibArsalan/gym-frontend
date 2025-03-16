import path from 'path'; // path library from node.js

interface IPath {
	root: string;
	src: string;
	srcIndexEntry: string;
	srcScss: string;
	srcScssEntry: string;
	srcScssVendorEntry: string;
	dst: string;
	build: string;
	nodeModules: string;
	buildHtmlTemplatesLocalIndex: string;
	environments: string;
	devEnv: string;
	prodEnv: string;
	mainEnv: string;
	localMicroEnv: string;
	localEnv: string;
}

function paths(): IPath {
	const configs: IPath = {} as any;
	configs.root = path.resolve(path.join(__dirname), '../');
	configs.src = path.join(configs.root, 'src');
	configs.srcIndexEntry = path.join(configs.src, 'index.ts');
	configs.srcScss = path.join(configs.src, 'assets', 'scss');
	configs.srcScssEntry = path.join(configs.srcScss, 'app.scss');
	configs.srcScssVendorEntry = path.join(configs.srcScss, 'vendor.scss');
	configs.dst = path.join(configs.root, 'dist');
	configs.build = path.join(configs.root, 'build');
	configs.nodeModules = path.join(configs.root, 'node_modules');
	configs.buildHtmlTemplatesLocalIndex = path.join(configs.src, 'index.html');
	configs.environments = path.join(configs.root, 'environments');
	configs.devEnv = path.join(configs.environments, '.env.development');
	configs.prodEnv = path.join(configs.environments, '.env.production');
	configs.localMicroEnv = path.join(
		configs.environments,
		'.env.local.micro'
	);
	configs.localEnv = path.join(
		configs.environments,
		'.env.local'
	);
	configs.mainEnv = path.join(configs.root, '.env');
	return configs;
}

export default paths();
