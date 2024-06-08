import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );
  const response = await data.json();
  return NextResponse.json(response);
}
