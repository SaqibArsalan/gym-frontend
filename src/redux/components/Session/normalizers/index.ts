import {IClassResponseInfo, IGymClassInitialState} from "../../Gym Class";
import {IDropdownResponse} from "../../Staff";
import {ISessionInfo} from "../Session.interface";


export const normalizeClassesForDropdown = (classes: IClassResponseInfo[]): IDropdownResponse[] =>
    classes.map((it)=>({
        id: it.id,
        name: it.className,
    })
)

export const normalizeSessionsForDropdown = (sessions: ISessionInfo[]): IDropdownResponse[] =>
    sessions.map((it) => ({
        id: it.id,
        name: `${it.className} — ${new Date(it.sessionDate).toLocaleString()}`,
    }))

