"use client";

import { images } from "@constants";
import { getPosts } from "@services/api";
import { DateTime } from "luxon";
import Image from "next/image";
import { useEffect, useState } from "react";

const TrendingPosts = () => {
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

  const sortedPosts = posts.sort((a, b) => {
    const beforeDate = DateTime.fromISO(a.createdAt);
    const afterDate = DateTime.fromISO(b.createdAt);
    return afterDate - beforeDate;
  });

  const topThreePosts = sortedPosts.slice(0, 3);

  return (
    <div>
      <h2 className="text-xl font-bold">Trending Posts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-col items-start gap-4 mt-4">
        {topThreePosts.map((post, index) => (
          <div key={index} className="flex gap-2 flex-col lg:flex-row items-start">
            <img
              src={`/assets/${post.post_img}`}
              alt={post.post_img}
              className="w-full lg:w-[195px] object-cover"
            />
            <div>
              <p className="text-xs font-medium text-gray-700">
                {DateTime.fromISO(post.createdAt).toFormat('dd MMM yyyy')}
              </p>
              <h1 className="font-semibold leading-5">{post.title}</h1>
              <p className="mt-1 text-xs font-medium text-gray-600 line-clamp-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
