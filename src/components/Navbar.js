
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow-sm px-6 py-3 relative">
      {/* Logo */}
      <div className="w-28">
        <a href="/">
          <img
            src="https://oha-web-s3.s3.ap-south-1.amazonaws.com/assets/Assets/logo_icon.png"
            alt="oha logo"
            className="w-full"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
        {/* Dropdown */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center text-orange-500">
            Home
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </span>

          {/* Submenu */}
          <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            {["Health Management", "Prevention", "Solution"].map((item) => (
              <li key={item} className="px-4 py-2 hover:bg-gray-100">
                <a
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>

        {/* Other links */}
        {[
          { label: "OneHealth Locker", href: "/upload-reports" },
          { label: "Wellness Experts", href: "/wellness-experts" },
          { label: "OneHealth Shop", href: "/shop" },
          { label: "Find Doctors", href: "/find-doctors" },
          { label: "Lab Test", href: "/labtest" },
          { label: "Order Medicines", href: "/order-medicine" },
          { label: "For Corporates", href: "#" },
        ].map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-orange-500">
              {link.label}
            </a>
          </li>
        ))}

        {/* Language */}
        <li>
          <img
            src="https://oha-web-s3.s3.ap-south-1.amazonaws.com/assets/Assets/language.png"
            alt="language"
            className="w-10"
          />
        </li>

        {/* Auth */}
        <li>
          <button className="px-4 py-1 border rounded-md hover:bg-orange-50 hover:text-orange-500">
            Login/Signup
          </button>
        </li>

        {/* Cart */}
        <li>
          <a href="/cart" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path d="M7 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6.2 5l1.6 7.1A3 3 0 0 0 11 15h6a3 3 0 0 0 2.9-2.3L21 6H6.2zM5 4H3v2h2l1.6 7.1A5 5 0 0 0 11 19h6v-2H11a3 3 0 0 1-2.9-2.3L7 6H5V4z" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
}
