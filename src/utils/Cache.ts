// import AES from 'crypto-js/aes';
// import encUTF8 from 'crypto-js/enc-utf8';
//
// const ENCRYPTION_KEY = 'ee06040416674a04af3ff4f7881b76f2';
//
// // ----  Storage Crud Functions  ------ //
// // ----  Start  ------ //
//
// const storeDataToStorage = (
// 	storage: Storage,
// 	data: any,
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ) => {
// 	let saveData = data;
// 	if (data && isJson) {
// 		saveData = JSON.stringify(data);
// 	}
// 	if (saveData && isEncrypted) {
// 		saveData = AES.encrypt(saveData, ENCRYPTION_KEY).toString();
// 	}
// 	storage.setItem(key, saveData);
// };
//
// const getDataFromStorage = (
// 	storage: Storage,
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ) => {
// 	let data = storage.getItem(key);
// 	if (data && isEncrypted) {
// 		const bytes = AES.decrypt(data.toString(), ENCRYPTION_KEY);
// 		data = bytes.toString(encUTF8);
// 	}
// 	if (data && isJson) {
// 		data = JSON.parse(data);
// 	}
// 	return data;
// };
//
// const removeDataFromStorage = (storage: Storage, key: string) =>
// 	storage.removeItem(key);
//
// const existInStorage = (storage: Storage, key: string) =>
// 	storage.getItem(key) !== null;
//
// // ----  End  ------ //
// // ----  Storage Crud Functions  ------ //
//
// // ----  Exposed Functions  ------ //
// // ----  Start  ------ //
//
// export const saveToSession = (
// 	data: any,
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ): void =>
// 	storeDataToStorage(global.sessionStorage, data, key, isJson, isEncrypted);
//
// export const saveToLocal = (
// 	data: any,
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ): void =>
// 	storeDataToStorage(global.localStorage, data, key, isJson, isEncrypted);
//
// export const getFromLocal = (
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ): any => getDataFromStorage(global.localStorage, key, isJson, isEncrypted);
//
// export const getFromSession = (
// 	key: string,
// 	isJson = true,
// 	isEncrypted = false
// ): any => getDataFromStorage(global.sessionStorage, key, isJson, isEncrypted);
//
// export const removeFromLocal = (key: string): void => {
// 	removeDataFromStorage(global.localStorage, key);
// };
//
// export const removeFromSession = (key: string): void => {
// 	removeDataFromStorage(global.sessionStorage, key);
// };
//
// export const existInLocal = (key: string): boolean =>
// 	existInStorage(global.localStorage, key);
//
// export const existInSession = (key: string): boolean =>
// 	existInStorage(global.sessionStorage, key);
//
// // ----  End  ------ //
// // ----  Exposed Functions  ------ //

export class Cache {}
