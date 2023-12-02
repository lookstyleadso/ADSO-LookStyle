"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type PhotoProps = {
  id: number;
  photo_name: string;
  author: string;
  photos: string;
};

const SliderPhotos = () => {
  const [photo, setPhoto] = useState<PhotoProps[]>([]);
  const [Loading, SetLoading] = useState("Cargando");
  const url = "https://adso-lookstyle.onrender.com/api/v1/photos";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status == 200) {
        SetLoading("");
      }
      console.log(data);
      setPhoto(data.data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-container padding-container py-24 mx-auto cursor-grab">
      <Slider {...settings}>
        {photo.map((data) => (
          <div
            key={data.id}
            className="h-[350px] flex flex-col justify-between px-7 py-6"
          >
            <Image
              src={data.photos[0]}
              alt="photography"
              width={500}
              height={500}
              className="h-full w-96 pointer-events-none rounded-t-2xl"
            />
            <div className="flex w-96 place-content-between">
              <h4 className="capitalize bold-18 text-primarycolor-pc">
                {data.photo_name}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPhotos;
