import { NextResponse } from 'next/server';

type response = {
  code?: number;
  status?: string;
  message?: string;
  errorDetail?: badRequestErrorDetail,
  data?: any;
  errors?: any;
}

type badRequestErrorDetail = 'bad_model_request' | 'bad_message';

export function OK(options?: response) {
  const code = options?.code ?? 200; 
  return NextResponse.json<response>({
    code: code,
    status: options?.status,
    message: options?.message,
    data: options?.data,
  }, {status: code});
}

export function BAD_REQUEST(options?: {
  code?: number, 
  errorDetail?: badRequestErrorDetail,
  message?: string,
}) {
  const code = options?.code ?? 400; 
  return NextResponse.json<response>({
    code: code,
    errorDetail: options?.errorDetail,
    message: options?.message,
  },{ status: code });
}

export function SERVER_ERROR(message?:string){
  return NextResponse.json<response>({
    code: 500,
    message: message ?? "Internal Server Error",
  },{ status: 500 });
}