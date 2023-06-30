"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
  csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInReponse = await signIn("credentials", {
      email: data.get("mail"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInReponse && !signInReponse.error) {
      router.push("/admin");
    } else {
      console.log("Error:", signInReponse);
      setError("Mauvais identifiants");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full -mt-9 text-xl text-black font-semibold flex flex-col"
    >
      <input
        type="mail"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="< h-12 px-6 mt-4 text-lg text-white transition bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
      >
        Se connecter
      </button>
    </form>
  );
}
