import { NextResponse } from "next/server";

export async function GET(req) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers });
  }

  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );
  const response = await data.json();

  return new NextResponse(JSON.stringify(response), { headers });
}
