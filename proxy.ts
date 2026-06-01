import NextAuth from "next-auth";

import authConfig from "./auth.config";

// Next 16 renamed the `middleware` convention to `proxy`. Edge-safe: uses only
// the base config (no Prisma/bcrypt). The `authorized` callback gates /dashboard.
const { auth } = NextAuth(authConfig);

export default auth;

export const config = {
  matcher: ["/dashboard/:path*"],
};
