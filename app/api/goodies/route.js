import { NextResponse } from "next/server";
import connection from "@utils/db";
import Goodie from "@models/Goodie";

export const GET = async (request) => {
  try {
    await connection();
    const goodies = await Goodie.find();
    return new NextResponse(JSON.stringify(goodies))
  } catch (error) {
    return NextResponse.json({message: "Error in fetching goodies: " + error}, { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connection();
    await Goodie.create(body);
    return NextResponse.json({message: 'Goodie Created'}, { status: 201 })
  } catch (error) {
    return new NextResponse("Error in creating goodie: " + error.message, { status: 500 });
  }
}