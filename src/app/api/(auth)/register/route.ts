import { formDataToJson } from '@/core/utils/function';
import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';

export async function POST(request: NextRequest) {

  const registerSchema = yup.object().shape({
    firstName: yup.string().max(255).required('firstName is required'),
    email: yup.string().email('Must a valid email').required('email is required'),
    password: yup.string().required('password is required')
  });

  try {
    const formData = await request.formData();
    const jsonData = formDataToJson(formData);

    await registerSchema.validate(jsonData, {abortEarly: false});
    
    return NextResponse.json({
      status: 200,
      message: "Berhasil"
    });
  } catch (err) {
    if(err instanceof yup.ValidationError){
      return NextResponse.json({
        errors: err.errors,
      }, {
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Internal Server Error",
      error: err,
    }, {
      status: 400,
    });
  }
}