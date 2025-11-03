import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!clientID || !clientSECRET) {
  throw new Error("Missing Google OAuth credentials");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: clientID,
      clientSecret: clientSECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
