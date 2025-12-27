"use server"; // Tells Next.js this file is server-only

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function uploadBookAction(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title) return;

  await prisma.book.create({
    data: {
      title: title,
      author: "Member",
      status: "Pending",
    },
  });

  revalidatePath("/dashboard/member");
  return { success: true };
}

export async function updateStatusAction(id: number, status: string) {
  // Database update logic
  await prisma.book.update({
    where: { id },
    data: { status: status as "Pending" | "Published" | "Rejected" },
  });
  revalidatePath("/dashboard/admin");
}
