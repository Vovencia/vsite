export interface IAppInfo {
	icon: string;
	name: string;
	uid : string;
}
export function appInfo(value: IAppInfo): IAppInfo{
	return value;
}