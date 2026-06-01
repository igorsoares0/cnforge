import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

// Edge-safe base config. No Prisma / bcrypt here so it can run in middleware.
// The Credentials provider (which needs Node APIs) is added in auth.ts.
export default {
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // Used by the middleware to gate /dashboard.
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = nextUrl.pathname.startsWith("/dashboard");
      if (isProtected) return isLoggedIn;
      return true;
    },
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    session({ session, token }) {
      if (token.id && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
