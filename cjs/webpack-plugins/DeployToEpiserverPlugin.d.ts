import { DelegatedPlugin as Plugin, Compiler } from 'webpack';
export declare type DeployToEpiserverPluginOptions = {
    base: string;
    filepath: string;
    filename: string;
    path: string;
};
export declare class DeployToEpiserverPlugin extends Plugin {
    private _auth;
    private _api;
    private _isAuthorized;
    options: Readonly<DeployToEpiserverPluginOptions>;
    constructor(options: DeployToEpiserverPluginOptions);
    apply(compiler: Compiler): void;
}
export default DeployToEpiserverPlugin;
