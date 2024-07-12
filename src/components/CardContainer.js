import React from "react";
import Card from "./Card";

const CardContainer = () => {
  // Define card data
  const cards = [
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/TILESj.jpg?v=1719917986&width=1400",
      heading: "Formal",
      buttonText: "Shop Now",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/TILES_7.jpg?v=1719225933&width=1400",
      heading: "Shahkar Luxury Lawns",
      buttonText: "Shop Now",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/tile_7.jpg?v=1717069845&width=1400",
      heading: "Iris Lawn",
      buttonText: "Shop Now",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/tile_5_1af9ad03-dd66-4972-b608-5e3defc24eb5.jpg?v=1717587395&width=800",
      heading: "Ready to Wear",
      buttonText: "Shop Now",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            heading={card.heading}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
