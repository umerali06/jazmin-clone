/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SwiperSection.css"; // Import custom CSS for additional styles

const swiperContent = [
  {
    largeImg:
      "https://jazmin.pk/cdn/shop/files/SHOP_THE_LOOK_2.jpg?v=1719227608&width=1000",
    smallImgs: [
      {
        img: "https://jazmin.pk/cdn/shop/files/30_a6f66118-f29a-45fc-b285-d265724a6adf.jpg?v=1706093436&width=600",
        product: {
          vendor: "Unstitched | Stitched",
          title: "EMBROIDERED CHIFFON UC-3025",
          price: "Rs. 26,500",
          link: "/products/embroidered-chiffon-uc-3025",
        },
        dots: [
          "https://jazmin.pk/cdn/shop/files/60_b0ff929f-e3bb-4fd6-b4f5-501eece34361.jpg?v=1706954805&width=600",
        ],
      },
    ],
  },
  {
    largeImg:
      "https://jazmin.pk/cdn/shop/files/SHOP_THE_LOOK.jpg?v=1719227355&width=1000",
    smallImgs: [
      {
        img: "https://jazmin.pk/cdn/shop/files/94_600e008c-e12a-4c7e-a887-157c69b185e5.jpg?v=1719051143&width=600",
        product: {
          vendor: "Unstitched",
          title: "Digital Printed Lawn USE - 9073",
          price: "Rs. 4,250",
          link: "/products/digital-printed-lawn-use-9073",
        },
        dots: [
          "https://jazmin.pk/cdn/shop/files/96_b83a669c-5ab0-4bb1-b020-14aae59c67b4.jpg?v=1719051143&width=600",
        ],
      },
    ],
  },
];

const DotSwiper = ({ dots }) => {
  const [currentImage, setCurrentImage] = React.useState(dots[0]);

  return (
    <div>
      <img
        src={currentImage}
        alt="Small Swiper Image"
        className="w-full object-center object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      />
      <div className="flex justify-center mt-2">
        {dots.map((dot, index) => (
          <button
            key={index}
            className="w-3 h-3 bg-gray-300 rounded-full mx-1"
            onClick={() => setCurrentImage(dot)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const SwiperSection = () => {
  return (
    <div className="w-full h-screen p-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-full"
      >
        {swiperContent.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row h-full p-4">
              <div className="md:w-2/3 p-2">
                <img
                  src={content.largeImg}
                  alt="Large Swiper Image"
                  className="w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-1/3 flex flex-col justify-between p-4">
                <DotSwiper dots={content.smallImgs[0].dots} />
                <div className="v-stack justify-items-center gap-2 mt-4">
                  <span className="vendor smallcaps heading">
                    {content.smallImgs[0].product.vendor}
                  </span>
                  <div className="v-stack justify-items-center gap-1">
                    <a
                      href={content.smallImgs[0].product.link}
                      className="product-title h6 text-blue-600 hover:underline"
                    >
                      {content.smallImgs[0].product.title}
                    </a>
                    <div className="price-list">
                      <span className="sale-price h6 text-subdued">
                        {content.smallImgs[0].product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;
