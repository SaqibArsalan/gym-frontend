import {IUserInfo, IUsersDropdown} from "../User.interface";


export const normalizeUsersByName = (users: IUserInfo[]): IUsersDropdown[] =>
    users.map((user)=>({
        id: user.id,
        name: user.firstName,
        email: user.email
    })
)