import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'animate.css';
import Estates from "../Components/Estates/Estates";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const data =useLoaderData();
    return (
        <>
        <Helmet>
          <title>PremierResX | Home</title>
        </Helmet>
        <div className="w-full relative animate__animated animate__fadeInUp">
            <div className=" " >
                <img className="" src="/banner.jpg" alt="" />
                
    </div>
    <div className="absolute top-[50%] w-[40%] p-4 glass -translate-y-[50%]">
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {data.map(resort=>(<SwiperSlide key={resort.id}>
          <img className=" h-[130px] md:h-[220px] lg:h-[400px] w-full" src={resort.image} />
        </SwiperSlide>))}
        
      </Swiper>
    </div>
        </div>
        <div className="my-10 ">
        <h1 className="text-center text-3xl font-extrabold mb-6"> Estates</h1>
            <Estates data={data}>

            </Estates>
            
            </div></>
    );
};

export default Home;