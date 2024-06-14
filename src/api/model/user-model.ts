export type LoginResponse = {
  id: string;
  firstName: string;
  lastName?: string;
  company?: string;
  email: string;
}

export type CreateUserResponse = {
  email: string;
}

export type LoginRequest = {
  email: string;
  password: string;
}

export type CreateUserRequest = {
  firstName: string;
  lastName?: string;
  company?: string;
  email: string;
  password: string;
}