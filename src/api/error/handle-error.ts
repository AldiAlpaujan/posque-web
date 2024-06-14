import * as yup from 'yup';
import { NextResponse } from 'next/server';

import { BAD_REQUEST, SERVER_ERROR } from '@/core/utils/api-response';
import { ResponseError } from './response-error';

export class HandleError{
  static handle(error: any): NextResponse {
    if(error instanceof yup.ValidationError){
      return BAD_REQUEST({
        errorDetail: "bad_model_request",
        message: error.errors[0],
      });
    } else if(error instanceof ResponseError) {
      return BAD_REQUEST({
        code: error.status,
        errorDetail: "bad_message",
        message: error.message,
      });
    }else {
      return SERVER_ERROR(error.message);
    }
  }
}