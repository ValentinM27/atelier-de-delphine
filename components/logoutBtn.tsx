"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      className="py-1 px-2 rounded-md text-white bg-red-400 hover:bg-red-600"
      onClick={() => signOut()}
    >
      Déconnexion
    </button>
  );
};
