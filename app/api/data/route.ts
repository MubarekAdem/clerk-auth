import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      message: "Authenticated",
      data: { userId: user.id, username: user.name },
    },
    { status: 200 }
  );
}
