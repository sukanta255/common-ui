import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Navbar() {
  return /*#__PURE__*/_jsxs("nav", {
    className: "flex items-center justify-between bg-white shadow-sm px-6 py-3 relative",
    children: [/*#__PURE__*/_jsx("div", {
      className: "w-28",
      children: /*#__PURE__*/_jsx("a", {
        href: "/",
        children: /*#__PURE__*/_jsx("img", {
          src: "https://oha-web-s3.s3.ap-south-1.amazonaws.com/assets/Assets/logo_icon.png",
          alt: "oha logo",
          className: "w-full"
        })
      })
    }), /*#__PURE__*/_jsxs("ul", {
      className: "hidden md:flex items-center gap-6 text-sm font-semibold",
      children: [/*#__PURE__*/_jsxs("li", {
        className: "relative group cursor-pointer",
        children: [/*#__PURE__*/_jsxs("span", {
          className: "flex items-center text-orange-500",
          children: ["Home", /*#__PURE__*/_jsx("svg", {
            className: "w-4 h-4 ml-1",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/_jsx("path", {
              d: "M5 7l5 5 5-5H5z"
            })
          })]
        }), /*#__PURE__*/_jsx("ul", {
          className: "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10",
          children: ["Health Management", "Prevention", "Solution"].map(item => /*#__PURE__*/_jsx("li", {
            className: "px-4 py-2 hover:bg-gray-100",
            children: /*#__PURE__*/_jsx("a", {
              href: `/${item.toLowerCase().replace(/ /g, "-")}`,
              className: "block",
              children: item
            })
          }, item))
        })]
      }), [{
        label: "OneHealth Locker",
        href: "/upload-reports"
      }, {
        label: "Wellness Experts",
        href: "/wellness-experts"
      }, {
        label: "OneHealth Shop",
        href: "/shop"
      }, {
        label: "Find Doctors",
        href: "/find-doctors"
      }, {
        label: "Lab Test",
        href: "/labtest"
      }, {
        label: "Order Medicines",
        href: "/order-medicine"
      }, {
        label: "For Corporates",
        href: "#"
      }].map(link => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("a", {
          href: link.href,
          className: "hover:text-orange-500",
          children: link.label
        })
      }, link.label)), /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("img", {
          src: "https://oha-web-s3.s3.ap-south-1.amazonaws.com/assets/Assets/language.png",
          alt: "language",
          className: "w-10"
        })
      }), /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("button", {
          className: "px-4 py-1 border rounded-md hover:bg-orange-50 hover:text-orange-500",
          children: "Login/Signup"
        })
      }), /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("a", {
          href: "/cart",
          className: "flex items-center",
          children: /*#__PURE__*/_jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            className: "w-6 h-6",
            fill: "currentColor",
            children: /*#__PURE__*/_jsx("path", {
              d: "M7 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6.2 5l1.6 7.1A3 3 0 0 0 11 15h6a3 3 0 0 0 2.9-2.3L21 6H6.2zM5 4H3v2h2l1.6 7.1A5 5 0 0 0 11 19h6v-2H11a3 3 0 0 1-2.9-2.3L7 6H5V4z"
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx("button", {
      className: "md:hidden text-2xl",
      children: "\u2630"
    })]
  });
}