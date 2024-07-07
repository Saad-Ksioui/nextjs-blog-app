
const Hero = () => {
  return (
    <section className="w-4/5 mx-auto my-10 flex flex-col justify-center items-center font-poppins">
      <h1 className="text-4xl font-extrabold">From Code to Creation: Learn, Build, Achieve</h1>
      <p className="text-[19px] w-2/4 text-center text-gray-500 font-open-sans">Join our newsletter to stay updated on new coding techniques, the latest tech trends, and more.</p>
      <form className="font-poppins flex items-center gap-7 mt-5">
        <input type="email" placeholder="Enter your email" className="p-2 outline-none bg-white"/>
        <button type="submit" className="bg-[#101727] text-white p-2 rounded-lg">
          Subscribe
        </button>
      </form>
    </section>
  )
};

export default Hero
