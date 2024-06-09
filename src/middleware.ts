import {NextRequest, NextResponse} from 'next/server';
import { auth_middleware } from './middleware/auth-middleware';

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname === '/api/auth/signin'){
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  if(req.nextUrl.pathname === '/app'){
    return NextResponse.redirect(new URL('/app/dashboard', req.url));
  }

  if(req.nextUrl.pathname.startsWith('/app')){
    return auth_middleware(req);
  }

  return NextResponse.next();
}