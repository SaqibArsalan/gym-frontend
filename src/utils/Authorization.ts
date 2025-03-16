
import { ROLES } from "config/enums";
import { IChildModuleInfo } from "config/interface";
import { convertArrayToObject } from "redux/utils/reducer.helper";


class Authorization {

    roles: string[];

    rolesMap: { [key: string]: string };

    constructor(roles: string[]) {
        this.roles = roles;
        this.rolesMap = convertArrayToObject(roles, undefined, (role: string) => role.toLowerCase());
    }

    checkIfModuleHaveAuthorization(moduleInfo: IChildModuleInfo) {
        return moduleInfo.allowedRoles.find((role: ROLES) => Boolean(this.rolesMap[role.toString().toLowerCase()]))
    }
}

export default Authorization;