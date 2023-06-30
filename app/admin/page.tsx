import { loginIsRequiredServer } from "@/lib/auth";

export default async function Admin() {
  await loginIsRequiredServer();

  return <div>Admin Panel</div>;
}
