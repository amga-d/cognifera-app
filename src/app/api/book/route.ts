import { initialBooks } from "@/lib/data";
import { NextResponse } from "next/server";

// GET /api/books
// This function handles GET requests to this URL
export async function GET() {
  // In a real app, you would fetch data from a database here.
  // For now, we return our mock data.
  return NextResponse.json(initialBooks);
}
