"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
  csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter();

  const [waitForApi, setWaitForApi] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setWaitForApi(true);
    setError(null);

    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInReponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInReponse && !signInReponse.error) {
      router.push("/admin");
    } else {
      setError("Mauvais identifiants");
    }

    setWaitForApi(false);
  };

  return (
    <div className="m-1">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg m-auto p-5 rounded-md text-lg bg-orange-100 text-black flex flex-col"
      >
        <span className="ml-1 font-semibold">Accès administrateur</span>
        {error ? (
          <div className="text-xs ml-1 text-red-500">{error}</div>
        ) : null}
        <input
          type="mail"
          name="email"
          placeholder="Email"
          required
          className="w-full px-2 py-2 mb-4 mt-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
          className="w-full px-2 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className={
            waitForApi
              ? "h-12 px-6 mt-4 text-lg bg-orange-200 opacity-50"
              : "h-12 px-6 mt-4 text-lg transition bg-orange-200 rounded-lg focus:shadow-outline hover:bg-orange-400"
          }
          disabled={waitForApi ? true : false}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
