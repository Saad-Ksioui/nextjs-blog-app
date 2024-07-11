import { NextResponse } from "next/server";
import connection from "@utils/db";
import Testimonial from "@models/Testimonial";

export const GET = async (request) => {
  try {
    await connection();
    const testimonials = await Testimonial.find();
    return new NextResponse(JSON.stringify(testimonials))
  } catch (error) {
    return NextResponse.json({message: "Error in fetching testimonials: " + error}, { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connection();
    await Testimonial.create(body);
    return NextResponse.json({ message: 'Testimonial Created' }, { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating testimonial: " + error.message, { status: 500 });
  }
};