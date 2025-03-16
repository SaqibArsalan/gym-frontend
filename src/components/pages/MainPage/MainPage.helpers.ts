import Authorization from "utils/Authorization";
import { HEADER_LINKS_INFO } from "./MainPage.constants";
import { IHEADER_LINKS_INFO } from "./MainPage.interface";

export const filterModuleWrtRoles = (roles: string[]): IHEADER_LINKS_INFO[] => {
    const authorization = new Authorization(roles);
    return HEADER_LINKS_INFO.filter((item: IHEADER_LINKS_INFO) => (
        item.default || (item.moduleInfo && authorization.checkIfModuleHaveAuthorization(item.moduleInfo))
    ));
}

export const getActiveModuleIndex = (locationPath: string, items: IHEADER_LINKS_INFO[]) => {
    let index = 0;
    items.find((item: IHEADER_LINKS_INFO, moduleIndex: number) => {
        const result = item.moduleInfo && locationPath.includes(item.moduleInfo?.routeUrl);
        if(result) {
            index = moduleIndex;
        }
        return result;
    });
    return index;
}