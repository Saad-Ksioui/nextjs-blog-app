import Link from "next/link";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="rounded-lg shadow-md p-4 h-fit break-inside-avoid">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <img src={`${testimonial.pfp_image}`} alt={testimonial.name} className="size-16 rounded-full object-cover" />
          <div className="leading-6">
            <h1 className="font-semibold">{testimonial.name}</h1>
            <span className="text-xs text-gray-700 font-semibold">{testimonial.username}</span>
          </div>
        </div>
        <Link target="_blank" href="https://x.com/home?lang=en">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-10" enable-background="new 0 0 72 72" viewBox="0 0 72 72" id="twitter-x"><switch><g><path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"></path></g></switch></svg>
        </Link>
      </div>
      <p className="text-sm text-gray-700">{testimonial.message}</p>
    </div>
  )
};

export default Testimonial
