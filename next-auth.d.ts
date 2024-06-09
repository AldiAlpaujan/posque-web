import { SessionUserType } from '@/core/types/session-user-type';
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user?: SessionUserType,
  }

  interface User extends SessionUserType {
    id?: string | null;
    image?: string | null;
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string | null
  }
}

// Extend the built-in JWT types
declare module 'next-auth/jwt' {
  interface JWT extends SessionUserType {
    id?: string | null;
    image?: string | null;
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string | null
  }
}
