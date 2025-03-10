import React from "react";
import Container from "../container/Container";

function Footer() {
  const footerMenu = [
    {
      title: "ABOUT ZOMATO",
      link: [
        { linkTitle: "Who We Are", path: "#" },
        { linkTitle: "Blog", path: "#" },
        { linkTitle: "Work With Us", path: "#" },
        { linkTitle: "Investor Relations", path: "#" },
        { linkTitle: "Report Fraud", path: "#" },
        { linkTitle: "Press Kit", path: "#" },
        { linkTitle: "Contact Us", path: "#" },
      ],
    },
    {
      title: "ZOMAVERSE",
      link: [
        { linkTitle: "Zomato", path: "#" },
        { linkTitle: "Blinkit", path: "#" },
        { linkTitle: "Feeding India", path: "#" },
        { linkTitle: "Hyperpure", path: "#" },
        { linkTitle: "Zomaland", path: "#" },
      ],
    },
    {
      title: "FOR RESTAURANTS",
      link: [
        { linkTitle: "Partner With Us", path: "#" },
        { linkTitle: "Apps For You", path: "#" },
      ],
    },
    {
      title: "LEARN MORE",
      link: [
        { linkTitle: "Privacy", path: "#" },
        { linkTitle: "Security", path: "#" },
        { linkTitle: "Terms", path: "#" },
        { linkTitle: "Sitemap", path: "#" },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#F8F8F8] pt-5">
      <Container>
        <div>
          <div className="flex justify-between items-center">
            <img
              src="/images/blackLogo.webp"
              alt="Zomato Logo"
              className="md:h-10 h-8 w-auto"
            />
            <div className=" flex md:flex-row flex-col gap-3">
              <select
                name="cities"
                id="cities"
                className="px-4 py-2 text-black border rounded-lg outline-none"
              >
                <option value="india">India</option>
                <option value="uae">Bangladesh</option>
                <option value="uae">Sri Lanka</option>
              </select>
              <select
                name="language"
                id="language"
                className="px-4 py-2 text-black border rounded-lg outline-none"
              >
                <option value="english">English</option>
                <option value="bengali">Marathi</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 mt-10 justify-center gap-6 md:gap-0">
            {footerMenu.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 text-gray-600">
                  {section.title}
                </h3>
                <ul className="text-gray-500">
                  {section.link.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1">
                      <a href={link.path}>{link.linkTitle}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <hr className="my-6 " />
            <p className="text-gray-500 justify-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nam in, nihil temporibus magni quia itaque placeat laborum nemo non! Nesciunt, reiciendis quos in corporis impedit minus eaque fugit fuga.
            </p>
            <p className="text-center text-gray-600 mt-3 md:mt-0">
              © {" "}
              <a
                href="#"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Atharva Deshpande
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;