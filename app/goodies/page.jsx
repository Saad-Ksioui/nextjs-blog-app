"use client"

import { getGoodies } from "@services/api";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Goodies = () => {
  const [goodies, setGoodies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchGoodies = async () => {
      try {
        setIsLoading(true)
        const data = await getGoodies();
        if (data) {
          setGoodies(data);
          setIsLoading(false)
          console.log('Fetched data successfully');
        } else {
          console.error('No data fetched');
        }
      } catch (error) {
        console.error('Error fetching goodies:', error);
      }
    }

    fetchGoodies()
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
    <section className="w-4/5 mx-auto my-20 flex flex-col items-center font-poppins">
      {
        goodies?.length > 0 ? (
          <>
            <h1 className="text-3xl font-bold uppercase">Bonus Goodies</h1>
            <form className="flex flex-col lg:flex-row items-center gap-3 my-10 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 outline-none bg-white border border-gray-300 rounded-lg w-full lg:w-80"
              />
              <button
                type="submit"
                className="bg-[#101727] text-white p-2 rounded-lg w-full lg:w-auto"
              >
                Subscribe
              </button>
            </form>
            <div className="w-full flex flex-col gap-5">
              {
                goodies.map((goodie, index) => (
                  <div className="flex flex-col md:flex-row items-start gap-3 my-3">
                    <img src={`/assets/${goodie.image}`} className="h-48 w-full md:w-1/3 rounded-lg object-cover" />
                    <div className="mt-1 flex flex-col items-start w-full md:w-2/3">
                      <h1 className="text-xl font-semibold">{goodie.title}</h1>
                      <p className="text-sm text-gray-600 font-medium mt-2">{goodie.description}</p>
                      <Link target="_blank" href={goodie.link} className="flex items-center gap-2 py-1 px-3 rounded-3xl font-medium text-sm border-2 border-black hover:text-white hover:bg-black transition-all duration-200 w-fit mt-3">
                        Web Site
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                ))
              }

            </div>


          </>
        ) : (
          <div className="flex items-center justify-center h-96">
            <h1 className="font-bold uppercase text-2xl text-gray-950">There is no bonus goodies yet!</h1>
          </div>
        )
      }
    </section>
  )
};

export default Goodies;
