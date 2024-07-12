import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center md:text-left">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#call-us" className="hover:underline">
                  Call us
                </a>
              </li>
              <li className="mb-2">
                <a href="#email-us" className="hover:underline">
                  Email Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#stitching-service" className="hover:underline">
                  Stitching Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#international-shipping" className="hover:underline">
                  International Shipping
                </a>
              </li>
              <li className="mb-2">
                <a href="#pakistan-shipping" className="hover:underline">
                  Pakistan Shipping
                </a>
              </li>
              <li className="mb-2">
                <a href="#gift-packaging" className="hover:underline">
                  Gift Packaging
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul>
              <li className="mb-2">
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#refund-exchange-policy" className="hover:underline">
                  Refund &amp; Exchange Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#shipping-policy" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8 text-center md:text-left">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
            <div className="flex justify-center space-x-4">
              <a href="#facebook" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a href="#instagram" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a>
              <a href="#youtube" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
              <a href="#tiktok" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTiktok} size="1x" />
              </a>
              <a href="#linkedin" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
              <a href="#whatsapp" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="flex justify-center space-x-4">
              <a href="#visa" className="hover:text-gray-400">
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  ></path>
                </svg>
              </a>
              <a href="#mastercard" className="hover:text-gray-400">
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-master"
                >
                  <title id="pi-master">Mastercard</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  ></path>
                </svg>
              </a>
              <a href="#cash" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  fill="none"
                  aria-labelledby="pi-cash"
                >
                  <title id="pi-cash">Cash</title>
                  <g clip-path="url(#pi-cash)">
                    <rect width="38" height="24" rx="3" fill="#F5F5F5"></rect>
                    <rect
                      x=".5"
                      y=".5"
                      width="37"
                      height="23"
                      rx="2.5"
                      stroke="#000"
                      stroke-opacity=".07"
                    ></rect>
                    <path
                      d="M16.633 9.778c0-.611.556-1.193 1.617-1.384v2.794c-1.193-.296-1.617-.788-1.617-1.41ZM21.587 14.161c0 .737-.518 1.328-1.837 1.475v-2.982c1.437.325 1.837.792 1.837 1.507Z"
                      fill="#707070"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.002-3H19a.75.75 0 0 1-.75-.75v-.561c-1.542-.176-2.84-.871-3.201-2.01a1.005 1.005 0 0 1-.049-.307c0-.327.276-.551.666-.551.333 0 .585.143.723.483.248.649.795 1.152 1.861 1.315v-3.271c-1.971-.412-3.03-1.166-3.03-2.489 0-1.395 1.246-2.338 3.03-2.547V6.75A.75.75 0 0 1 19 6h.004a.75.75 0 0 1 .746.75v.555c1.495.18 2.677.915 3.03 2.01.033.102.05.204.05.306 0 .327-.277.551-.666.551-.382 0-.61-.19-.723-.483-.325-.717-.87-1.147-1.691-1.302v3.107c2.083.422 3.25 1.144 3.25 2.572 0 1.566-1.45 2.45-3.25 2.633v.551a.75.75 0 0 1-.746.75h-.002Z"
                      fill="#707070"
                    ></path>
                    <path
                      d="M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM33 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      fill="#707070"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="pi-cash">
                      <path fill="#fff" d="M0 0h38v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
