export interface IUser {
  readonly id?: number;
  email: string;
  password: string;
  readonly role: string;
}
