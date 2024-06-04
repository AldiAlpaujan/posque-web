import { NextRequest } from 'next/server';

import { CreateUserRequest } from '@/core/api/model/user-model';
import { UserService } from '@/core/api/services/user-service';
import { formDataToJson } from '@/core/utils/function';
import { OK } from '@/core/utils/api-response';
import { HandleError } from '@/core/api/error/handle-error';

export async function POST(request: NextRequest) {
  try {
    const req = formDataToJson(await request.formData()) as CreateUserRequest;    
    const res = await UserService.register(req);
    
    return OK({
      message: "Register successfully",
      data: res,
    });

  } catch (err) {
    return HandleError.handle(err)
  }
}