import {IUserRoles} from "./i-user-roles";

export interface IRoles {
  id?: number;
  value: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  UserRoles: IUserRoles;
}
