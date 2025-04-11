import { auth } from "@/auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserId = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("You must be signed in to use this feature");
  }

  return userId;
};
// This file contains server-only utilities
import prisma from "./prisma";

// Export functions that access Prisma here
export async function getUser(userId: string) {
  return await prisma.user.findUnique({ where: { id: userId } });
}

// Add other server-only database operations here