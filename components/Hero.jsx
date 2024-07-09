
const Hero = () => {
  return (
    <section className="w-4/5 mx-auto my-10 flex flex-col justify-center items-center font-poppins">
    <h1 className="text-3xl lg:text-4xl font-extrabold text-center">
      From Code to Creation: Learn, Build, Achieve
    </h1>
    <p className="text-base lg:text-lg w-full lg:w-2/4 text-center text-gray-500 mt-4">
      Join our newsletter to stay updated on new coding techniques, the latest tech trends, and more.
    </p>
    <form className="font-poppins flex flex-col lg:flex-row items-center gap-5 mt-5 w-full lg:w-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 outline-none bg-white border border-gray-300 rounded-lg w-full lg:w-auto"
      />
      <button
        type="submit"
        className="bg-[#101727] text-white p-2 rounded-lg w-full lg:w-auto"
      >
        Subscribe
      </button>
    </form>
  </section>

  )
};

export default Hero
