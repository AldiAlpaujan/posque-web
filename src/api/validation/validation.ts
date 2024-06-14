import * as yup from 'yup';

export class Validation{
  static async validate<T>(schema: yup.AnySchema, data: T): Promise<T> {
    return await schema.validate(data, { abortEarly:false })
  }
}