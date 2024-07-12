import React from "react";

const VideoCard = ({ videoUrl, heading, buttonText }) => {
  return (
    <div className="max-w-xs mx-auto mb-8 lg:max-w-sm lg:mx-2">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
          style={{ minHeight: "250px" }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <button className="relative bg-transparent text-black py-2 px-6 rounded overflow-hidden transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
          {buttonText}
          <span className="absolute bg-black bottom-0 right-0 h-0.5 w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

const VideoCardContainer = () => {
  const videos = [
    {
      videoUrl:
        "https://jazmin.pk/cdn/shop/videos/c/vp/397928a0253b40b08940dd2d3c9d06e8/397928a0253b40b08940dd2d3c9d06e8.HD-1080p-2.5Mbps-29797135.mp4?v=0",
      heading: "IRIS LAWN",
      buttonText: "SHOP NOW",
    },
    {
      videoUrl:
        "https://jazmin.pk/cdn/shop/videos/c/vp/7140167204304ec699b411ac57a39bec/7140167204304ec699b411ac57a39bec.HD-1080p-2.5Mbps-29796115.mp4?v=0",
      heading: "SHAHKAAR LUXURY LAWN",
      buttonText: "SHOP NOW",
    },
    {
      videoUrl:
        "https://jazmin.pk/cdn/shop/videos/c/vp/6ed176828415446984bf917bb2650c77/6ed176828415446984bf917bb2650c77.HD-1080p-3.3Mbps-29796228.mp4?v=0",
      heading: "UNSTITCHED SUMMER",
      buttonText: "SHOP NOW",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center -mx-2 lg:justify-start">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              videoUrl={video.videoUrl}
              heading={video.heading}
              buttonText={video.buttonText}
            />
          ))}
        </div>
        <hr className="border-gray-300 mt-8" />
      </div>
    </section>
  );
};

export default VideoCardContainer;
