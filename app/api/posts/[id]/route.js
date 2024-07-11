import { NextResponse } from "next/server";
import connection from "@utils/db";
import Post from "@models/Post";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connection();

    const post = await Post.findById({_id: id});
    if(!post) {
      return NextResponse.json({message: "There is no post with this Id"})
    }
    return NextResponse.json(post, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error in fetching post: " + error}, { status: 500 })
  }
}