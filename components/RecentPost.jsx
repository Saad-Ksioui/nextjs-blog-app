"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getRecentPost } from "@services/api";
import moment from "moment";
import Link from "next/link";

const RecentPost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getRecentPost();
        if (data) {
          setPost(data);
          console.log('Fetched post:', data); // Log the response data
          if (data && data.length > 0) {
            setPost(data[0]); // Assuming data is an array, get the first post
          } else {
            setError("No data fetched");
          }
        } else {
          setError("No data fetched");
        }
      } catch (error) {
        setError("Error fetching post: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold">Recent Post</h2>
      {post && (
        <>
          <img
            src={`/assets/${post?.post_img}`}
            alt={post?.post_img}
            className="lg:h-[400px] object-cover mt-4 w-full"
          />
          <p className="mt-3 text-sm font-medium text-gray-700">
            {post?.creator} - {moment(post?.createdAt).format('MMMM Do YYYY')}
          </p>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-xl font-semibold">{post?.title}</h1>
            <Link href={`/posts/${post?._id}`}>
              <ArrowUpRight className="text-gray-700" />
            </Link>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-2">
            {post?.description}
          </p>
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {post?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black"
              >
                {tag.tag}
              </span>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default RecentPost;
