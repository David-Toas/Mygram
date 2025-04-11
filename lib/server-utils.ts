// This file contains server-only utilities
import prisma from "./prisma";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Export functions that access Prisma here
export async function getUser(userId: string) {
  return await prisma.user.findUnique({ where: { id: userId } });
}

// Add other server-only database operations here
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}