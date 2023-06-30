import { loginIsRequiredServer } from "@/lib/auth";
import { LogoutButton } from "@/components/logoutBtn";

export default async function Admin() {
  const session = await loginIsRequiredServer();

  return (
    <div>
      Admin Panel:
      {session?.user?.email}
      <LogoutButton />
    </div>
  );
}
