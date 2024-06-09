import {NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname === '/api/auth/signin'){
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  if(req.nextUrl.pathname === '/app'){
    return NextResponse.redirect(new URL('/app/dashboard', req.url));
  }

  return NextResponse.next();
}