import { NextResponse } from "next/server";
import connection from "@utils/db";
import Post from "@models/Post";

export const GET = async (request) => {
  try {
    await connection();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts))
  } catch (error) {
    return NextResponse.json({message: "Error in fetching posts: " + error}, { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connection();
    await Post.create(body);
    return NextResponse.json({message: 'Post Created'}, { status: 201 })
  } catch (error) {
    return new NextResponse("Error in creating post: " + error.message, { status: 500 });
  }
}