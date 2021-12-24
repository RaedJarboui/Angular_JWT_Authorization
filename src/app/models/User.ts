import {Role} from "./role";

export class User {
  id: number|undefined;
  username: string;
  password: string;
  name: string;
  accessToken: string|undefined;
  refreshToken: string|undefined;
  role: Role = Role.User;
}