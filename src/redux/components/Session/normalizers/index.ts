import {IClassResponseInfo, IGymClassInitialState} from "../../Gym Class";
import {IDropdownResponse} from "../../Staff";


export const normalizeClassesForDropdown = (classes: IClassResponseInfo[]): IDropdownResponse[] =>
    classes.map((it)=>({
        id: it.id,
        name: it.className,
    })
)