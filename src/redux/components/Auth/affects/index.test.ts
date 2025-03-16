import { loginSuccess, logout } from '.';
import {IAuthInitialState, authInitialState} from '..';

describe('Auth affects tests', () => {
    describe('loginSuccess Tests', () => {
        it('loginSuccess should return state with updated values', () => {
            const valueToCompare = {
                "isLoggedIn": true,
                "auth": {
                  "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkbjhlRkFiTEhtZk1hS0lRc2w1dVoiLCJyb2xlcyI6WyJQTyBDT01NRVJDSUFMUyIsIkNvbW1hbmRvIEdvZCIsIkxpdmVPcHMgRGVmYXVsdCIsIldNUyBPUFMgU3VwZXJ2aXNvciIsIlBPX0NPTU1FUkNJQUxTX1NVUEVSVklTT1IiXSwiZmlsdGVycyI6W10sInVzZXJOYW1lIjoiMDM0MjI3MDk5ODgiLCJ1c2VySWQiOiI2NWpNVFhuZDEyRmNRQmtTWmR6N05xIiwib3JnYW5pemF0aW9uSWQiOiI3OTMxNjYwMjgxMDE5MTA4MTgzMjEwIiwidXNlckNoYW5uZWwiOiJOVUNMRVVTIiwiY2xpZW50S2V5IjoiIiwibGVnYWN5VG9rZW4iOiJkbjhlRkFiTEhtZk1hS0lRc2w1dVoiLCJ1c2VyVHlwZSI6IkNVU1RPTUVSIiwic2NvcGVzIjpbIndtcy51b20uYWxsLnJlYWQiLCJvcGVyYXRpb25zLnN0YWZmLmFsbC5yZWFkIiwib3BlcmF0aW9ucy5icmVha2Rvd24uYWxsLnJlYWQiLCJ2ZW5kb3IudmVuZG9yLmFsbC5yZWFkIiwicHJvY3VyZW1lbnQucHJvY3VyZW1lbnQuYWxsLmFkZCIsIm9wZXJhdGlvbnMudGFzay5hbGwucmVhZCIsIndhcmVob3VzZS5sb2NhdGlvbi5hbGwucmVhZCIsInByb2N1cmVtZW50LnJmcS5hbGwudXBkYXRlIiwiaWRlbnRpdHkudXNlci5hbGwucmVhZCIsImludmVudG9yeS50cmFuc2FjdGlvbi5hbGwuY3JlYXRlIiwiaW52ZW50b3J5LnN0YXRlbWVudC5hbGwudXBkYXRlIiwiaW52ZW50b3J5LndhcmVob3VzZS5hbGwucmVhZCIsInRheC50YXguYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5wcm9jdXJlbWVudC5hbGwucmVhZCIsInRheC50YXguYWxsLmNyZWF0ZSIsImludmVudG9yeS5zdGF0ZW1lbnQuYWxsLmNyZWF0ZSIsImNhdGFsb2cucHJvZHVjdC5hbGwucmVhZCIsImludmVudG9yeS5zdGF0ZW1lbnQuYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5yZnEuYWxsLmFkZCIsIm9wZXJhdGlvbnMuYnJlYWtkb3duLmFsbC51cGRhdGUiLCJpbnZlbnRvcnkudHJhbnNhY3Rpb24uYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5wcm9jdXJlbWVudC5hbGwudXBkYXRlIl0sImV4cCI6MTY0MDYxNDEyMywiaWF0IjoxNjQwNjEzNDAzfQ.rLm1cd6nf7aZnGI5LSSCJAWjna548lUWkhVfsLLwmu9TfWIOsg_2ioEazU5FK3dE0esIM7m-q1DlQbwg0npNGg",
                  "expiresAt": "720",
                  "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NTlCd1JPeXN4WFdKamNwSXBNU3lFIiwicm9sZXMiOlsiUE8gQ09NTUVSQ0lBTFMiLCJDb21tYW5kbyBHb2QiLCJMaXZlT3BzIERlZmF1bHQiLCJXTVMgT1BTIFN1cGVydmlzb3IiLCJQT19DT01NRVJDSUFMU19TVVBFUlZJU09SIl0sImZpbHRlcnMiOltdLCJ1c2VyTmFtZSI6IjAzNDIyNzA5OTg4IiwidXNlcklkIjoiNjVqTVRYbmQxMkZjUUJrU1pkejdOcSIsIm9yZ2FuaXphdGlvbklkIjoiNzkzMTY2MDI4MTAxOTEwODE4MzIxMCIsInVzZXJDaGFubmVsIjoiTlVDTEVVUyIsImNsaWVudEtleSI6IjdaeGtNczhpNmpXcndUR3VDakdFcFp5OFZOeHlwdW9XRUtIaVlZbHJzcXFKcVlTMEFGR1lLSzJaV1hjMEFRdTEiLCJsZWdhY3lUb2tlbiI6Ijc1OUJ3Uk95c3hYV0pqY3BJcE1TeUUiLCJ1c2VyVHlwZSI6IkNVU1RPTUVSIiwic2NvcGVzIjpbIndtcy51b20uYWxsLnJlYWQiLCJvcGVyYXRpb25zLnN0YWZmLmFsbC5yZWFkIiwib3BlcmF0aW9ucy5icmVha2Rvd24uYWxsLnJlYWQiLCJ2ZW5kb3IudmVuZG9yLmFsbC5yZWFkIiwicHJvY3VyZW1lbnQucHJvY3VyZW1lbnQuYWxsLmFkZCIsIm9wZXJhdGlvbnMudGFzay5hbGwucmVhZCIsIndhcmVob3VzZS5sb2NhdGlvbi5hbGwucmVhZCIsInByb2N1cmVtZW50LnJmcS5hbGwudXBkYXRlIiwiaWRlbnRpdHkudXNlci5hbGwucmVhZCIsImludmVudG9yeS50cmFuc2FjdGlvbi5hbGwuY3JlYXRlIiwiaW52ZW50b3J5LnN0YXRlbWVudC5hbGwudXBkYXRlIiwiaW52ZW50b3J5LndhcmVob3VzZS5hbGwucmVhZCIsInRheC50YXguYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5wcm9jdXJlbWVudC5hbGwucmVhZCIsInRheC50YXguYWxsLmNyZWF0ZSIsImludmVudG9yeS5zdGF0ZW1lbnQuYWxsLmNyZWF0ZSIsImNhdGFsb2cucHJvZHVjdC5hbGwucmVhZCIsImludmVudG9yeS5zdGF0ZW1lbnQuYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5yZnEuYWxsLmFkZCIsIm9wZXJhdGlvbnMuYnJlYWtkb3duLmFsbC51cGRhdGUiLCJpbnZlbnRvcnkudHJhbnNhY3Rpb24uYWxsLnJlYWQiLCJwcm9jdXJlbWVudC5wcm9jdXJlbWVudC5hbGwudXBkYXRlIl0sImV4cCI6MTY0MTU0OTIxMCwiaWF0IjoxNjQwMjUzMjEwfQ.z2GryKum4XB-r2S_aS32_LPhRGS7UeSMJeXtUC-h03OxL-z3S4_ZNDML1Hb8LBa61voguKyJSoYnNgSQpoXuMQ"
                },
                "roles": [
                  "PO COMMERCIALS",
                  "Commando God",
                  "LiveOps Default",
                  "WMS OPS Supervisor",
                  "PO_COMMERCIALS_SUPERVISOR"
                ],
                "scopes": [
                  {
                    "subject": "uom",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "staff",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "breakdown",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "vendor",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "procurement",
                    "action": "add",
                    "conditions": null
                  },
                  {
                    "subject": "task",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "location",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "rfq",
                    "action": "update",
                    "conditions": null
                  },
                  {
                    "subject": "user",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "transaction",
                    "action": "create",
                    "conditions": null
                  },
                  {
                    "subject": "statement",
                    "action": "update",
                    "conditions": null
                  },
                  {
                    "subject": "warehouse",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "tax",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "procurement",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "tax",
                    "action": "create",
                    "conditions": null
                  },
                  {
                    "subject": "statement",
                    "action": "create",
                    "conditions": null
                  },
                  {
                    "subject": "product",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "statement",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "rfq",
                    "action": "add",
                    "conditions": null
                  },
                  {
                    "subject": "breakdown",
                    "action": "update",
                    "conditions": null
                  },
                  {
                    "subject": "transaction",
                    "action": "read",
                    "conditions": null
                  },
                  {
                    "subject": "procurement",
                    "action": "update",
                    "conditions": null
                  }
                ],
                "userInfo": {
                  "id": "65jMTXnd12FcQBkSZdz7Nq",
                  "fullName": "Uzair Alam",
                  "phoneNumber": "03422709988",
                  "nationalId": "",
                  "countryCode": "PK",
                  "accountStatus": "ENABLED",
                  "email": "",
                  "organizationId": "7931660281019108183210"
                }
              };
            const responseToCompare: IAuthInitialState = {
                ...authInitialState,
                ...valueToCompare
            };
            const result = loginSuccess({...authInitialState}, {
                type: "test",
                payload: valueToCompare
            });
            expect(result).toEqual(responseToCompare);
        });
    });

    describe('logout Tests', () => {
        it('logout should clean state', () => {
            const responseToCompare: IAuthInitialState = {
                ...authInitialState,
            };
            const result = logout({...authInitialState}, {
                type: "test",
                payload: undefined
            });
            expect(result).toEqual(responseToCompare);
        });
    });
});
