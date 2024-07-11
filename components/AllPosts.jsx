"use client"

import { getPosts } from "@services/api";
import { ArrowUpRight } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getPosts();
        console.log('Fetched posts:', data);
        if (data) {
          setPosts(data);
        } else {
          console.error('No data fetched');
        }
      } catch (error) {
        setError('Error fetching posts: ' + error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);



  const topThreePosts = posts.slice(0, 3);

  return (
    <section className="w-4/5 mx-auto my-10 font-poppins">
      <h2 className="text-2xl font-bold">All Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {topThreePosts?.map((post, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow break-inside-avoid">
            <img
              src={`/assets/${post.post_img}`}
              alt={post.title}
              className="h-[247px] object-cover w-full rounded-lg"
            />
            <p className="mt-3 text-sm font-medium text-gray-700">
              {post.creator} - {moment(post.createdAt).format('MMMM Do YYYY')}
            </p>
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-lg font-semibold">{post.title}</h1>
              <Link href={`/posts/${post._id}`}>
                <ArrowUpRight className="text-gray-700" />
              </Link>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-3">
              {post.description}
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
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/posts" className="bg-[#101727] text-white px-3 py-2 rounded-lg">
          View more
        </Link>
      </div>
    </section>
  );
};

export default AllPosts;
