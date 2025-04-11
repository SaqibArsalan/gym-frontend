import {IDropdownResponse, IStaff} from "../Staff.interface";


export const normalizeStaffByName = (staff: IStaff[]): IDropdownResponse[] =>
    staff.map((it)=>({
        id: it.id,
        name: it.name,
    })
)