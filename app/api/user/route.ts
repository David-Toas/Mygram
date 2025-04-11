import { getUser } from "@/lib/server-utils";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const user = await getUser(session.user.id);
  return Response.json(user);
}