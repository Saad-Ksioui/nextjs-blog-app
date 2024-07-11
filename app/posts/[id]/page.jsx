"use client";

import { images } from "@constants";
import { getPostById } from "@services/api";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const Post = ({params}) => {
  const id_post = params.id;

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPostById = async () => {

      setIsLoading(true);
      try {
        const data = await getPostById(id_post);
        if (data) {
          setPost(data);
          console.log('Fetched post:', data);
        } else {
          console.error('No data fetched');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostById();
  }, []);


  if (isLoading) {
    return (
      <section className="w-4/5 mx-auto my-10 font-poppins">
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
      </section>
    );
  }



  return (
    <section className="w-11/12 lg:w-4/5 mx-auto my-10 font-poppins flex flex-col lg:flex-row items-start gap-7">
      <div className="w-full lg:w-3/5">
        <img
          src={`/assets/${post?.post_img}`}
          alt={post?.title}
          className="h-[405px] object-cover w-full rounded-lg"
        />
        <p className="mt-3 text-sm font-medium text-gray-700">
          {post?.creator} - {moment(post?.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-xl font-semibold">{post?.title}</h1>
        <div className="mt-2 text-sm font-medium text-gray-600 whitespace-pre-wrap">
          <Markdown>{post?.description}</Markdown>
        </div>
      </div>
      <div className="w-full sticky top-4 lg:w-2/5 h-fit p-3 rounded-xl shadow bg-white">
        <h1 className="text-xl font-semibold">Latest posts</h1>
        {/* <div className="flex flex-col mt-5 gap-3">
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg1}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                How to Make a Request from a Server Using ReactJS
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">05 Jul 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg2}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                How to Center a Div in CSS
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">27 Jun 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src={images.TrendingPostImg3}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start justify-between h-20">
              <Link href={`/posts/${post.id}`} className="font-semibold leading-5">
                Understanding the New app/router Folder in Next.js
              </Link>
              <p className="text-xs font-medium text-gray-700 mb-3">07 Jul 2024</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Post;
