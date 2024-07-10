import { images } from "@constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Posts = () => {
  const posts = [
    {
      id: 1,
      src: images.RecentPostImg,
      alt: "Wearing glasses while coding on a computer",
      date: "27 Jun 2024",
      title: "The Importance of Using Glasses While Coding",
      description:
        "In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...",
      tags: ["Research", "Health"],
    },
    {
      id: 2,
      src: images.RecentPostImg,
      alt: "Wearing glasses while coding on a computer",
      date: "27 Jun 2024",
      title: "The Importance of Using Glasses While Coding",
      description:
        "In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...",
      tags: ["Research", "Health"],
    },
    {
      id: 3,
      src: images.RecentPostImg,
      alt: "Wearing glasses while coding on a computer",
      date: "27 Jun 2024",
      title: "The Importance of Using Glasses While Coding",
      description:
        "In the digital age, coding has become an integral part of many professionals' daily lives. Whether you're a seasoned developer or just starting your journey in the world of programming, you likely spend long hours in front of a computer screen...",
      tags: ["Research", "Health"],
    },
  ];

  return (
    <section className="w-4/5 mx-auto my-10 font-poppins">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow">
            <Image
              src={post.src}
              alt={post.alt}
              className="h-[247px] object-cover w-full rounded-lg"
            />
            <p className="mt-3 text-sm font-medium text-gray-700">
              Saad Ksioui - {post.date}
            </p>
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-lg font-semibold">{post.title}</h1>
              <Link href={`/posts/${post.id}`}>
                <ArrowUpRight className="text-gray-700" />
              </Link>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm font-medium rounded-full border-2 border-black"
                >
                  {tag}
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
    </section>
  );
};

export default Posts;
