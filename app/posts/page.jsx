"use client"

import { getPosts } from "@services/api";
import { ArrowUpRight } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const data = await getPosts();
        if (data) {
          setPosts(data);
          setIsLoading(false)
          console.log('Fetched posts:', data);
        } else {
          console.error('No data fetched');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts()
  }, [])


  if (isLoading) {
    return (
      <section className="w-4/5 mx-auto my-10 font-poppins">
        <div className="flex items-center justify-center h-96">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>

            <span className="sr-only">Loading...</span>
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="w-4/5 mx-auto my-10 font-poppins">
      {
        posts?.length > 0 ? (
          <>
            <div className="flex flex-col lg:flex-row items-center justify-between my-10 gap-5">
              <h2 className="text-2xl font-bold">All Posts</h2>
              <form className="flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search for posts..."
                  className="p-2 outline-none bg-white border border-gray-300 rounded-lg w-full lg:w-auto"
                />
                <button
                  type="submit"
                  className="bg-[#101727] text-white px-4 py-2 rounded-lg w-full lg:w-auto"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 lg:gap-8 space-y-8">
              {posts?.map((post, index) => (
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
              <button className="bg-[#101727] text-white px-3 py-2 rounded-lg">
                View more
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-96">
            <h1 className="font-bold uppercase text-2xl text-gray-950">There is no posts yet!</h1>
          </div>
        )
      }
    </section>
  );
};

export default Posts;
