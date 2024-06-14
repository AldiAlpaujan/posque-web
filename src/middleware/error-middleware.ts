import { HandleError } from '@/api/error/handle-error';
import { NextRequest, NextResponse } from 'next/server';

type methodType = (...param:any) => Promise<NextResponse<any>>;

const handler = async (req: NextRequest, method: methodType) => {
  try {
    // TODO: do somthing here
    return await method(req);
  } catch (error) {
    return HandleError.handle(error);
  }
}

export const error_middleware = (...methods: methodType[]) => {
  const result: { [key: string]: methodType } = {};
  
  methods.forEach(method => {
    const name = method.name.substring(1);
    result[name] = async (req: NextRequest) => await handler(req, method)
  });

  return result;
}

