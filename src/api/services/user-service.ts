import { db } from "@/core/lib/firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import bcrypt, { compare } from 'bcrypt';

import { CreateUserRequest, LoginRequest, CreateUserResponse, LoginResponse } from "../model/user-model";
import { Validation } from "../validation/validation";
import { UserValidation } from "../validation/user-validation";
import { ResponseError } from "../error/response-error";


export class UserService{
  static async login(payload: LoginRequest): Promise<LoginResponse | null> {
    const loginRequest = await Validation.validate(UserValidation.LOGIN, payload);

    const q = query(
      collection(db, 'users'),
      where('email', '==', loginRequest.email),
    );

    const users = (await getDocs(q)).docs;
    
    if(users.length < 1){
      throw new ResponseError(400, "Email not registered");
    }

    const id = users[0].id;
    const user = users[0].data();
    const hasValidPassword = await compare(loginRequest.password, user.password);

    if(!hasValidPassword){
      throw new ResponseError(400, "Your password is incorrect");
    }
    
    return {
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      email: user.email,
    }
  }

  static async register(payload: CreateUserRequest): Promise<CreateUserResponse> {
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