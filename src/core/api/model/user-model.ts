export type UserResponse = {
  email: string;
  token?: string;
}

export type CreateUserRequest = {
  firstName: string;
  lastName?: string;
  company?: string;
  email: string;
  password: string;
}