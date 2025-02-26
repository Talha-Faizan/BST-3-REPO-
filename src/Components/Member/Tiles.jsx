import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Tiles = () => {
  return (
    <>
      <section className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper h-[50vh]"
        >
          <SwiperSlide>
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.pexels.com/photos/30056387/pexels-photo-30056387/free-photo-of-dramatic-light-on-marble-sculpture-of-a-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 border-2 border-[#5C95FF] rounded-3xl h-full">
              <div className="flex md:flex-row gap-2">
                <div className="bg-[#5C95FF] h-16 md:h-28 w-2 mt-2"></div>
                <h1 className="text-4xl md:text-6xl font-semibold text-left">
                  Become a <br /> member
                </h1>
              </div>
              <p className="mt-10 text-xl text-left">
                Use the skills learned to lead more effective presentations,
                workshops, or speeches in everyday life, whether in professional
                settings or community interactions.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.pexels.com/photos/30056387/pexels-photo-30056387/free-photo-of-dramatic-light-on-marble-sculpture-of-a-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Tiles;
