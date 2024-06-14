import * as yup from 'yup';

import { CreateUserRequest } from '../model/user-model';

export class UserValidation {
  static readonly REGISTER = yup.object<CreateUserRequest>({
    firstName: yup.string().min(1).max(255),
    lastName: yup.string().nullable().default(null),
    company: yup.string().nullable().default(null),
    email: yup.string().min(1).max(255).email('Must a valid email'),
    password: yup.string().min(1).max(255),
  });

  static readonly LOGIN = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });
}