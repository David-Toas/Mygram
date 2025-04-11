// This file contains utilities safe for client components
"use client";

// Add client-safe utilities here
export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString();
}