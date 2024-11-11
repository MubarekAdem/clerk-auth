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

  // Use firstName and lastName or a fallback for username
  const username =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.emailAddresses?.[0]?.emailAddress || "No username";

  return NextResponse.json(
    {
      message: "Authenticated",
      data: { userId: user.id, username },
    },
    { status: 200 }
  );
}
