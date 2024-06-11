import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    //Add here the logic to communicate with DB, and use a library, if required, to encrypt sensible information sent by frontend.
    return NextResponse.json({ message: "Data received" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error processing data" },
      { status: 500 }
    );
  }
}
