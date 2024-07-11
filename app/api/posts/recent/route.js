import { NextResponse } from "next/server";
import connection from "@utils/db";
import Post from "@models/Post";


export const GET = async (request) => {
  try {
    await connection();
    const post = await Post.find().sort({ createdAt: -1 }).limit(1);
    return NextResponse.json(post, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error in fetching the recent post: " + error}, { status: 500 })
  }
}