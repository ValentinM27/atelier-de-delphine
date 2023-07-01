import { LogoutButton } from "@/components/logoutBtn";
import { loginIsRequiredServer } from "@/lib/auth";

export default async function Admin() {
  const session = await loginIsRequiredServer();

  return (
    <div className="m-auto max-w-6xl text-black">
      <div className="m-1 p-2">
        <div className="font-semibold text-xl">
          Espace d&apos;administration
        </div>
        <div className="flex flex-row p-2 items-center border-b-orange-100 border-b-2 justify-between">
          <div>
            Connecté en tant que&nbsp;
            <span className="font-semibold text-orange-600">
              {session?.user?.name}
            </span>
          </div>
          <LogoutButton />
        </div>
        {/* Liste des posts */}
      </div>
    </div>
  );
}
