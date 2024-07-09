import { navItems } from "@constants";

const Footer = () => {
  return (
    <footer className="w-4/5 mx-auto mb-5 flex flex-col justify-center gap-3 font-poppins">
      <ul className="flex justify-center items-center gap-5">
        {
          navItems.map((navItem, index) => (
            <li key={index} className="relative text-black hover:text-gray-700 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              <a href={navItem.href}>{navItem.label}</a>
            </li>
          ))
        }
      </ul>
      <div class="flex items-center justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/github.png" />
        </a>
      </div>

      <p class="text-center text-gray-700 font-medium">&copy; 2024 DevAlchemy. All rights reservered.</p>
    </footer>
  )
};

export default Footer
