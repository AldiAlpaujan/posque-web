import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server"

export const auth_middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET_KEY,
  });
  
  if(!token){
    const url = new URL('/login', req.url);
    url.searchParams.set('callbackUrl', encodeURI(req.url));
    return NextResponse.redirect(url);
  }
}
