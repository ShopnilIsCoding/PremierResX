import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { MdPriceChange } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Estate = ({estate}) => {

    console.log(estate)
    return (
        <div className="glass rounded-xl p-3 space-y-2 " data-aos="zoom-in" 
        data-aos-duration="1000">
            <div className='relative'><img src={estate.image} className="h-[300px] w-full p-3 rounded-lg bg-base-200 " alt="" />
            <p className='bg-red-300 absolute p-2 rounded-full text-white font-black right-0 top-0'>{estate.status}</p>
            </div>
            <p className='text-xl font-semibold ml-1 text-center'>Estate Name: {estate.estate_title}</p>
            <div className='flex gap-2 justify-around' data-aos="fade-up" data-aos-duration="1500">
            <p className='flex gap-2 items-center'><MdPriceChange className='text-3xl text-green-600' /> <span className='text-green-600 font-bold'>{estate.price}</span></p>
            <p className='flex gap-2 items-center'><FaChartArea className='text-3xl text-yellow-600' /> <span className='text-yellow-600 font-bold'>{estate.area}</span></p>
            <p className='flex gap-2 items-center'><BsBuildingsFill className='text-3xl text-blue-600' /> <span className='text-blue-600 font-bold'>{estate.segment_name}</span></p>
            </div>
            <div className='flex justify-end mt-2' data-aos="fade-left" data-aos-duration="1500">
            <Link to={`/${estate.id}`}><button className='btn btn-primary btn-outline' > View Details</button></Link>
            </div>
        </div>
    );
};

export default Estate;