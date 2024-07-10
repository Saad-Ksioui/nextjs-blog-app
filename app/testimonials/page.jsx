import Testimonial from "@components/Testimonial";
import { images } from "@constants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      username: "john_doe",
      imgSrc: images.DefaultPfp,
      message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at vero rem voluptates magni repellendus cupiditate? Odio, nesciunt eum nobis accusamus placeat dolorem ut voluptate illum soluta temporibus amet numquam!",
    },
    {
      name: "Jane Smith",
      username: "jane_smith",
      imgSrc: images.DefaultPfp,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at eros nec justo ultricies cursus.",
    },
    {
      name: "Michael Brown",
      username: "michael_brown",
      imgSrc: images.DefaultPfp,
      message: "Aliquam erat volutpat. Vivamus consectetur fermentum libero, sed aliquam lectus dignissim sit amet. Nulla facilisi. Sed sed dui dui. Cras tincidunt mi a risus dapibus, sit amet tincidunt orci scelerisque. Aliquam erat volutpat. Vivamus consectetur fermentum libero, sed aliquam lectus dignissim sit amet.",
    },
    {
      name: "Emily Davis",
      username: "emily_davis",
      imgSrc: images.DefaultPfp,
      message: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Phasellus vel sem nec nisi vehicula posuere et sed dolor.",
    },
    {
      name: "Chris Johnson",
      username: "chris_johnson",
      imgSrc: images.DefaultPfp,
      message: "Donec gravida nisi et dui elementum, nec efficitur libero fermentum. Vivamus ut ligula id est vehicula blandit. In hac habitasse platea dictumst. Maecenas bibendum nisi nec risus sollicitudin, at consectetur nunc finibus. Maecenas bibendum nisi nec risus sollicitudin, at consectetur nunc finibus.",
    },
    {
      name: "Laura White",
      username: "laura_white",
      imgSrc: images.DefaultPfp,
      message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  return (
    <section className="w-4/5 mx-auto my-10 font-poppins">
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="font-bold uppercase text-2xl text-gray-950">Testimonials</h1>
        <p className="text-lg text-gray-600 font-semibold">What our users think about us?</p>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 lg:gap-8 space-y-8">
      {
        testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial}/>
        ))
      }
      </div>
    </section>
  )
};

export default Testimonials
