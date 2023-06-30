import { loginIsRequiredServer } from "@/lib/auth";

export default async function Admin() {
  const session = await loginIsRequiredServer();

  return (
    <div>
      Admin Panel:
      {session?.user?.email}
    </div>
  );
}
