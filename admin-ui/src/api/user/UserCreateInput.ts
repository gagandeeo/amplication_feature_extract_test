export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber: string;
  roles: Array<string>;
  username: string;
};
