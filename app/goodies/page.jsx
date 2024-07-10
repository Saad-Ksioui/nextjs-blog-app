import { images } from "@constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Goodies = () => {
  return (
    <section className="w-4/5 mx-auto my-20 flex flex-col items-center font-poppins">
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
        <div className="flex flex-col md:flex-row items-start gap-3 my-3">
          <Image src={images.BoxShadowGenerator} className="h-48 w-full md:w-1/3 rounded-lg object-cover"/>
          <div className="mt-1 flex flex-col items-start w-full md:w-2/3">
            <h1 className="text-xl font-semibold">Box Shadow Generator</h1>
            <p className="text-sm text-gray-600 font-medium mt-2">Create stunning box shadows for your elements with ease using our Box Shadow Generator. Experiment with different styles, colors, and opacities to enhance your design.</p>
            <Link target="_blank" href="https://cssgenerator.org/box-shadow-css-generator.html" className="flex items-center gap-2 py-1 px-3 rounded-3xl font-medium text-sm border-2 border-black hover:text-white hover:bg-black transition-all duration-200 w-fit mt-3">
              Web Site
              <ArrowRight/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-3 my-3">
          <Image src={images.IllustrationsSVGFree} className="h-48 w-full md:w-1/3 rounded-lg object-cover"/>
          <div className="mt-1 flex flex-col items-start w-full md:w-2/3">
            <h1 className="text-xl font-semibold">Illustrations SVG Free</h1>
            <p className="text-sm text-gray-600 font-medium mt-2">Access a wide range of high-quality, free SVG illustrations to use in your projects. Perfect for adding visual interest and enhancing the aesthetic appeal of your work.</p>
            <Link target="_blank" href="https://undraw.co/illustrations" className="flex items-center gap-2 py-1 px-3 rounded-3xl font-medium text-sm border-2 border-black hover:text-white hover:bg-black transition-all duration-200 w-fit mt-3">
              Web Site
              <ArrowRight/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-3 my-3">
          <Image src={images.GradientGenerator} className="h-48 w-full md:w-1/3 rounded-lg object-cover"/>
          <div className="mt-1 flex flex-col items-start w-full md:w-2/3">
            <h1 className="text-xl font-semibold">Gradient Generator</h1>
            <p className="text-sm text-gray-600 font-medium mt-2">Design beautiful, smooth gradients effortlessly with our Gradient Generator. Choose from linear or radial gradients, adjust colors, and preview your creations in real-time.</p>
            <Link target="_blank" href="https://cssgradient.io/" className="flex items-center gap-2 py-1 px-3 rounded-3xl font-medium text-sm border-2 border-black hover:text-white hover:bg-black transition-all duration-200 w-fit mt-3">
              Web Site
              <ArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Goodies;
