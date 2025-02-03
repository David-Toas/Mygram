// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Session, User } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from "@auth/core/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      username?: string | null;
    };
  }

  interface User {
    username?: string | null;
  }
}