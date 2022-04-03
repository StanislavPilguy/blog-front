import {IRoles} from "./iRoles";
import {IUser} from "./iUser";

export interface IToken {
  token: string;
  role: IRoles[];
  user: IUser;
}
