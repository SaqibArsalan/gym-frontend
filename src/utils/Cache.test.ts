// import { AES } from 'crypto-js';
// import { existInLocal, existInSession, getFromLocal, getFromSession, removeFromLocal, removeFromSession, saveToLocal, saveToSession } from './Cache';
//
// jest.mock('crypto-js/aes', jest.fn().mockImplementation(() => ({
//         decrypt: () => ({
//                 toString: () => ""
//             }),
//         encrypt: () => ({
//                 toString: () => ""
//             }),
//   })));
//
//
// describe('Cache Utils Tests', () => {
//     describe('existInStorage Tests', () => {
//         it('existInLocal should return false if item not found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'getItem');
//             const result = existInLocal('test');
//             expect(spy).toBeCalled();
//             expect(result).toBe(false);
//         });
//         it('existInLocal should return true if item is found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce((key: string) => "true");
//             const result = existInLocal('test');
//             expect(spy).toBeCalled();
//             expect(result).toBe(true);
//         });
//         it('existInSession should return false if item not found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'getItem');
//             const result = existInSession('test');
//             expect(spy).toBeCalled();
//             expect(result).toBe(false);
//         });
//         it('existInSession should return true if item is found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce((key: string) => "true");
//             const result = existInSession('test');
//             expect(spy).toBeCalled();
//             expect(result).toBe(true);
//         });
//     });
//
//     describe('removeFromStorage Tests', () => {
//         it('removeFromSession should return false if item not found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'removeItem');
//             removeFromSession('test');
//             expect(spy).toBeCalled();
//         });
//         it('removeFromLocalStorage should return true if item is found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'removeItem');
//             removeFromLocal('test');
//             expect(spy).toBeCalled();
//         });
//     });
//     describe('getItemFromStorage Tests', () => {
//         it('getFromStorage should return null if item not found', () => {
//             const spy = jest.spyOn(Storage.prototype, 'getItem');
//             const resultFromSession = getFromSession('test');
//             const resultFromLocal = getFromLocal('test');
//             expect(spy).toBeCalled();
//             expect(resultFromLocal).toBe(null);
//             expect(resultFromSession).toBe(null);
//         });
//         it('getFromStorage should return json if item found and flag is passed', () => {
//             const response = "{ key: 'true' }";
//             const spy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => response);
//             const parseSpy = jest.spyOn(JSON, 'parse').mockImplementation(() => ({ key: 'true' }));
//             const resultFromSession = getFromSession('test', true);
//             const resultFromLocal = getFromLocal('test', true);
//             expect(spy).toBeCalled();
//             expect(parseSpy).toBeCalled();
//             expect(resultFromLocal).toBeDefined();
//             expect(resultFromSession).toBeDefined();
//         });
//         it('getFromStorage should return encrypted string if item found and encrypted flag is passed', () => {
//             const response = "{ key: 'true' }";
//             const spy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => response);
//             const resultFromSession = getFromSession('test', false, true);
//             const resultFromLocal = getFromLocal('test', false, true);
//             expect(spy).toBeCalled();
//         });
//     });
//     describe('saveItemToStorage Tests', () => {
//         it('saveToStorage should save data in json by default', () => {
//             const spy = jest.spyOn(Storage.prototype, 'setItem');
//             const parseSpy = jest.spyOn(JSON, 'stringify').mockImplementation(() => "{ key: 'true' }");
//             const data = { key: 'true' };
//             saveToLocal(data, 'test');
//             saveToSession(data, 'test');
//             expect(spy).toBeCalled();
//             expect(parseSpy).toBeCalled();
//         });
//         it('saveToStorage should save data in encrypted form if flag is passed', () => {
//             const spy = jest.spyOn(Storage.prototype, 'setItem');
//             const data = { key: 'true' };
//             saveToLocal(data, 'test', false, true);
//             saveToSession(data, 'test', false, true);
//             expect(spy).toBeCalled();
//         });
//     });
// });


export const cache = new Cache();