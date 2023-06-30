import { NextAuthOptions, getServerSession, User } from "next-auth";
import { redirect } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "mail",
          placeholder: "exemple@exemple.com",
        },
        password: {
          label: "mot de passe",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        return { email: "toto" } as User;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");
}
