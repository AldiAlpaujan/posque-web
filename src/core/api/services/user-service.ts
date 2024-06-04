import { db } from "@/core/lib/firebase/config";
import { addDoc, collection } from "firebase/firestore";

import { CreateUserRequest, UserResponse } from "../model/user-model";
import { Validation } from "../validation/validation";
import { UserValidation } from "../validation/user-validation";

export class UserService{
  static async login() {

  }

  static async register(payload: CreateUserRequest): Promise<UserResponse> {
    const registerRequest = await Validation.validate(UserValidation.REGISTER, payload);
    
    await addDoc(collection(db,'users'), registerRequest);
    
    return {
      email: registerRequest.email
    }
  }
}