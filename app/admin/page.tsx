import { loginIsRequiredServer } from "@/lib/auth";
import { LogoutButton } from "@/components/logoutBtn";

export default async function Admin() {
  const session = await loginIsRequiredServer();

  return (
    <div className="m-auto max-w-6xl text-black">
      <div className="m-1 p-2">
        <span className="font-semibold">Page d&apos;administration</span>
        <span className="float-right">
          <LogoutButton />
        </span>
        {/* Liste des posts */}
      </div>
    </div>
  );
}
