import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPriceChange } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
const EstateDetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const estateDetails=data.find(estate=>estate.id == id);
    return (
        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-between p-4 border border-gray-400 rounded-xl bg-svg-background bg-no-repeat bg-contain bg-bottom lg:bg-cover">
            <Helmet>
                <title>PremierResX | {estateDetails.estate_title}</title>
            </Helmet>
            <div className="lg:w-1/2 p-4 glass rounded-xl"data-aos="flip-up" data-aos-duration="1000">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {estateDetails.preview_img.map((estate,idx)=><SwiperSlide key={idx}><img src={estate} className="h-[200px] md:h-[300px] lg:h-[400px] w-full" alt="" /></SwiperSlide>)}
        
      </Swiper>
            </div>
            <div className="flex-1 space-y-3">
                <p className="text-2xl font-black" data-aos="fade-up" data-aos-duration="1000">Title: {estateDetails.estate_title}</p>
                <p className="font-serif max-w-md" data-aos="fade-up" data-aos-duration="1200">{estateDetails.description}</p>
                
                
            <p className="font-black text-xl"data-aos="fade-up" data-aos-duration="1300">Facilities :</p>
            {estateDetails.facilities.map(facility=>(<p className="font-semibold font-serif flex gap-2 items-center"data-aos="fade-up" data-aos-duration="1400"><FaCheckCircle className="text-green-500" />{facility}</p>))}
            <div className='flex gap-2 lg:gap-6 justify-between flex-wrap' data-aos="fade-up" data-aos-duration="1500">
                <p className="flex gap-2 items-center"><FaMapLocationDot className="text-3xl text-primary" /> <span className="text-primary font-semibold font-sans">{estateDetails.location}</span></p>
            <p className='flex gap-2 items-center'><MdPriceChange className='text-3xl text-green-600' /> <span className='text-green-600 font-bold'>{estateDetails.price}</span></p>
            <p className='flex gap-2 items-center'><FaChartArea className='text-3xl text-red-800' /> <span className='text-red-800 font-bold'>{estateDetails.area}</span></p>
            <p className='flex gap-2 items-center'><BsBuildingsFill className='text-3xl text-blue-600' /> <span className='text-blue-600 font-bold'>{estateDetails.segment_name}</span></p>
            </div>
            </div>
        </div>
    );
};

export default EstateDetails;