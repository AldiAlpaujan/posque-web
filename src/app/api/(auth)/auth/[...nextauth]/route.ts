import { UserService } from "@/core/api/services/user-service";
import { SessionUserType } from "@/core/types/session-user-type";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXT_AUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      name: "LOGIN",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        const result = await UserService.login({
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        });
        
        const user: SessionUserType = { 
          id: result?.id, 
          firstName: result?.firstName, 
          lastName: result?.lastName,
          company: result?.company,
          email: result?.email,
        };
        
        if (user) return user;
        
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({token, account, user}) {
      if(account?.type === "credentials"){
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.company = user.company;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({session, token}) {
      session!.user!.id  = token.id;
      session!.user!.firstName  = token.firstName;
      session!.user!.lastName  = token.lastName;
      session!.user!.company  = token.company;
      session!.user!.email  = token.email;

      if("image" in token){
        session!.user!.image  = token.image;
      }
      
      return session;
    },
  },
  pages: {
    signIn: '/login',
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };