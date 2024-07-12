import React from "react";

const ProductCard = ({ imageUrl, category, title, price }) => {
  return (
    <div className="max-w-xs mx-auto mb-4 px-2" style={{ maxWidth: "300px" }}>
      <a href="#product-link" className="block">
        <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col justify-between">
          <img src={imageUrl} alt={title} className="w-full" />
          <div className="p-4 flex flex-col items-center justify-center flex-1">
            <div className="mb-2 text-sm text-gray-600 text-center">
              {category}
            </div>
            <div className="text-lg font-bold mb-2 text-center">{title}</div>
            <div className="text-gray-900 font-bold text-center">{price}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

const TrendingProducts = () => {
  const products = [
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/56.jpg?v=1715854625&width=600",
      category: "UNSTITCHED | STITCHED",
      title: "PRODUCT TITLE 1",
      price: "RS. 9,950",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/95_2aeba8da-8a05-458c-b161-16ecfafcaa93.jpg?v=1717155361&width=600",
      category: "CATEGORY 2",
      title: "PRODUCT TITLE 2",
      price: "RS. 8,500",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/02_df43c4bc-c8e8-4b76-aa03-fc3b88f19e23.jpg?v=1716369639&width=600",
      category: "CATEGORY 3",
      title: "PRODUCT TITLE 3",
      price: "RS. 7,200",
    },
    {
      imageUrl:
        "https://jazmin.pk/cdn/shop/files/4_9d3f992e-2f15-4b68-a038-882f88be7481.jpg?v=1706093404&width=600",
      category: "CATEGORY 4",
      title: "PRODUCT TITLE 4",
      price: "RS. 6,800",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            TRENDING
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            THIS WEEK TOP 4
          </h3>
        </div>
        <div className="flex flex-wrap justify-center max-w-full overflow-x-auto hide-scroll-bar">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
