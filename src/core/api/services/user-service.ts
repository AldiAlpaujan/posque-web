import { db } from "@/core/lib/firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import bcrypt from 'bcrypt';

import { CreateUserRequest, UserResponse } from "../model/user-model";
import { Validation } from "../validation/validation";
import { UserValidation } from "../validation/user-validation";
import { ResponseError } from "../error/response-error";


export class UserService{
  static async login() {

  }

  static async register(payload: CreateUserRequest): Promise<UserResponse> {
    const registerRequest = await Validation.validate(UserValidation.REGISTER, payload);
    
    const q = query(
      collection(db, 'users'),
      where('email', '==', registerRequest.email),
    );

    const users = (await getDocs(q)).docs;

    if(users.length > 0){
      throw new ResponseError(400, 'Email is already registered');
    }

    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);
    await addDoc(collection(db,'users'), registerRequest);
    
    return {
      email: registerRequest.email
    }
  }
}