import { db } from "./config";

type RegisterPayload = {
  firstName: string;
  lastName?: string;
  company?: string;
  email: string;
  password: string;
}

export function register(payload: RegisterPayload) {
  
}