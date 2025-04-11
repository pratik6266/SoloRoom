import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}
export interface CustomUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

export const authOption: AuthOptions = {
  pages: {
    signIn: '/'
  },
  callbacks:{
    async signIn ({ user, account }){
      console.log("The Use data is: ", user);
      console.log("The account is: ", account);
      return true
    },
    async jwt({ token, user }) {
      if(user){
        token.user = user
      }
      return token
    },
    async session({ session, token }: {session: CustomSession, token: JWT}) {
      session.user = token.user as CustomUser
      return session
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ]
}