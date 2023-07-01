import { NextAuthOptions, getServerSession, User } from "next-auth";
import { redirect } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";

import db from "@/lib/db";
import user from "@/models/user";

import bcrypt from "bcrypt";
import { z } from "zod";

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

        // Validation des données
        const userSchemaValidation = z.object({
          email: z.string().email(),
          password: z.string(),
        });

        try {
          userSchemaValidation.parse(credentials);
        } catch (error: any) {
          console.log(error);
          return null;
        }

        await db();

        const dbUser = await user.findOne({ email: credentials.email }).exec();

        if (!dbUser) return null;

        bcrypt
          .compare(credentials.password, dbUser.password)
          .then((valid: boolean) => {
            if (!valid) {
              return null;
            }
          });

        const { password, ...dbUserWtPwd } = dbUser.toObject();

        return dbUserWtPwd as User;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export async function loginIsRequiredServer() {
  const session = await isLogged();

  if (!session) return redirect("/");

  return session;
}

export async function isLogged() {
  return await getServerSession(authOptions);
}
